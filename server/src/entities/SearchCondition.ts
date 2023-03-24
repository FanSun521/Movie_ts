import { Type } from "class-transformer";
import { IsInt, Min } from "class-validator";
import { BaseEntity } from "./BaseEntity";

export class SearchCondition extends BaseEntity {
  @Min(1, { message: "页码最小为1" })
  @IsInt({ message: "页数应该为整数" })
  @Type(() => Number)
  public page: number = 1;

  @Min(1, { message: "条数最小为1" })
  @IsInt({ message: "条数应该为整数" })
  @Type(() => Number)
  public limit: number = 10;

  @Type(() => String)
  public key: string = "";

  public static transform(obj: object): SearchCondition {
    return SearchCondition.baseTransform(SearchCondition, obj);
  }
}