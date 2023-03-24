import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

type ClassType<T> = new (...args: []) => T;

export class BaseEntity {

  public async validateThis(skipValidate: boolean = false): Promise<string[]> {
    const errors = await validate(this, {
      skipMissingProperties: skipValidate,
    });
    const errorMsg = errors.map(err => Object.values(err.constraints!));
    return errorMsg.map(err => err.map(e => e).join());
  }

  protected static baseTransform<T>(classType: ClassType<T>, plainObj: object): T {
    if (plainObj instanceof classType) return plainObj;
    return plainToClass(classType, plainObj);
  }
}