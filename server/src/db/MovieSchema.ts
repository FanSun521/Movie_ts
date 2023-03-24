import Mongoose from "mongoose";
import { Movie } from "../entities/Movie";

export interface IMovie extends Movie, Mongoose.Document { }
// 接口的作用: 编译时类型检查
const movieSchema = new Mongoose.Schema<IMovie>({
  // 声明的作用：运行时的类型
  name: String,
  types: [String],
  areas: [String],
  time: Number,
  isHot: Boolean,
  isComing: Boolean,
  isClassic: Boolean,
  description: String,
  poster: String,
}, {
  versionKey: false,
})

export default Mongoose.model<IMovie>("movie", movieSchema);