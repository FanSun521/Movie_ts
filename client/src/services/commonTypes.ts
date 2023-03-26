export interface IErroResp {
  data: null,
  error: string
}
export interface ISuccessResp<T> {
  data: T,
  error: null
}
export interface IPageResp<T> {
  data: T[],
  error: null,
  total: number
}

export interface IMovie {
  _id?: string;
  name: string;
  types: string[];
  areas: string[];
  time: number;
  isHot?: boolean;
  isClassic?: boolean;
  description?: string;
  poster?: string;
}

export interface ISearchCondition {
  page?: number;
  limit?: number;
  key?: string;
}