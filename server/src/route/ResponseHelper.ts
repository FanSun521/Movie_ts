import { Response } from "express";
import { ISearchResult } from "../service/MovieService";

export default class ResponseHelper {
  public static sendError(error: string[] | string, response: Response) {
    let err: string;
    err = Array.isArray(error) ? error.join() : error;
    response.send({
      err,
      data: null,
    })
  }

  public static sendData(data: any, response: Response) {
    response.send({
      err: null,
      data,
    })
  }

  public static sendPageData<T>(result: ISearchResult<T>, response: Response) {
    if (result.errors.length > 0) {
      this.sendError(result.errors, response);
      return;
    }
    response.send({
      err: null,
      data: result.data,
      total: result.count,
    })
  }
}