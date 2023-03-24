import { plainToClass, Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsInt, IsNotEmpty, Max, Min, validate } from "class-validator";
import { BaseEntity } from "./BaseEntity";

export class Movie extends BaseEntity {

  public static transform(obj: object): Movie {
    return this.baseTransform(Movie, obj);
  }

  @IsNotEmpty({ message: "电影名称不能为空" })
  @Type(() => String)
  public name: string;

  @IsNotEmpty({ message: "电影类型不能为空" })
  @ArrayMinSize(1, { message: "电影至少有一个类型" })
  @Type(() => String)
  @IsArray({ message: "必须是一个字符串数组" })
  public types: string[];

  @IsNotEmpty({ message: "上映地区不能为空" })
  @ArrayMinSize(1, { message: "至少有一个上映地区" })
  @Type(() => String)
  @IsArray({ message: "必须是一个字符串数组" })
  public areas: string[];

  @IsNotEmpty({ message: "时长不能为空" })
  @IsInt({ message: "时长必须是整数" })
  @Min(1, { message: "时长最少一分钟" })
  @Max(9999, { message: "时长过长" })
  @Type(() => Number)
  public time: number;

  @IsNotEmpty({ message: "是否热映不能为空" })
  @Type(() => Boolean)
  public isHot: boolean = false;

  @IsNotEmpty({ message: "是否上映不能为空" })
  @Type(() => Boolean)
  public isComing: boolean = false;

  @IsNotEmpty({ message: "是否经典不能为空" })
  @Type(() => Boolean)
  public isClassic: boolean = false;

  @Type(() => String)
  public description?: string;

  @Type(() => String)
  public poster?: string;


}