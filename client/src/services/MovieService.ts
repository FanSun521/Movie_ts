import axios from 'axios';
import { IErroResp, IMovie, IPageResp, ISearchCondition, ISuccessResp } from './commonTypes';

export const addMovie = async (movie: IMovie): Promise<IErroResp | ISuccessResp<IMovie>> => {
  const { data } = await axios.post('/api/movie', movie);
  return data;
}

export const editMovie = async (id: string, movie: IMovie): Promise<ISuccessResp<true> | IErroResp> => {
  const { data } = await axios.put(`/api/movie/${id}`, movie);
  return data;
}

export const deleteMovie = async (id: string): Promise<ISuccessResp<true>> => {
  const { data } = await axios.delete(`/api/movie/${id}`);
  return data;
}

export const getMovieById = async (id: string): Promise<ISuccessResp<IMovie | null>> => {
  const { data } = await axios.get(`/api/movie/${id}`);
  return data;
}

export const getMovies = async (condition: ISearchCondition): Promise<IPageResp<IMovie>> => {
  const { data } = await axios.get("/api/movie", { params: condition });
  return data;
}