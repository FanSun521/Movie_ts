import { MovieModel } from "../db";
import { IMovie } from "../db/MovieSchema";
import { Movie } from "../entities/Movie";
import { SearchCondition } from "../entities/SearchCondition";

export interface ISearchResult<T> {
  count: number;
  data: T[];
  errors: string[];
}

export class MovieService {

  public static async add(movie: object): Promise<IMovie | string[]> {
    movie = Movie.transform(movie);
    const errors = await (movie as Movie).validateThis();
    if (errors.length > 0) {
      return errors;
    }
    return await MovieModel.create(movie);
  }

  public static async edit(id: string, movie: object): Promise<string[]> {
    const _movie = Movie.transform(movie);
    const errors = await (_movie as Movie).validateThis(true);
    if (errors.length > 0) {
      return errors;
    }
    await MovieModel.updateOne({ _id: id }, movie);
    return errors;
  }

  public static async delete(id: string): Promise<void> {
    MovieModel.deleteOne({ _id: id });
  }

  public static async findById(id: string): Promise<IMovie | null> {
    return await MovieModel.findById({ _id: id });
  }

  public static async find(condition: object): Promise<ISearchResult<IMovie>> {
    const searchCondition = SearchCondition.transform(condition);
    const errors = await searchCondition.validateThis();

    if (errors.length > 0) {
      return {
        errors,
        count: 0,
        data: []
      }
    }

    const movies = await MovieModel.find({
      name: { $regex: new RegExp(searchCondition.key) }
    }).skip((searchCondition.page - 1) * searchCondition.limit).limit(searchCondition.limit)
    const total = await MovieModel.countDocuments();
    return { errors, count: total, data: movies };
  }
}