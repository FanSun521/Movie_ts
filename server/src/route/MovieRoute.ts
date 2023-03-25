import express from "express";
import { MovieService } from "../service/MovieService";
import ResponseHelper from "./ResponseHelper";
const MovieRouter = express.Router();

MovieRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await MovieService.findById(id)
    ResponseHelper.sendData(data, res);
  } catch {
    ResponseHelper.sendData(null, res);
  }
});

MovieRouter.get("/", async (req, res) => {
  const result = await MovieService.find(req.query);
  ResponseHelper.sendPageData(result, res);
});


MovieRouter.post("/", async (req, res) => {
  const result = await MovieService.add(req.body);
  if (Array.isArray(result)) {
    ResponseHelper.sendError(result, res);
  } else {
    ResponseHelper.sendData(result, res);
  }
});

MovieRouter.put("/:id", async (req, res) => {
  try {
    const result = await MovieService.edit(req.params.id, req.body);
    if (result.length > 0) {
      ResponseHelper.sendError(result, res);
      return;
    }
    ResponseHelper.sendData(true, res);
  } catch {
    ResponseHelper.sendError("id错误修改 失败", res);
  }
});

MovieRouter.delete("/:id", async (req, res) => {
  try {
    const result = await MovieService.delete(req.params.id);
    ResponseHelper.sendData(true, res);
  } catch {
    ResponseHelper.sendError("id错误删除失败", res);
  }
});

export { MovieRouter };