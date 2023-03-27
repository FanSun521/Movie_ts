import { ThunkAction } from "@reduxjs/toolkit";
import { IMovie, ISearchCondition } from "../../services/commonTypes";
import { getMovies } from "../../services/MovieService";
import { IRootState } from "../reducers";
import { IAction } from "./ActionType";

export type SaveMovieAction = IAction<"SAVE_MOVIE", {
  movies: IMovie[];
  total: number;
}>;

export type SetLoadingAction = IAction<"SET_LOADING", boolean>;

export type SetConditionAction = IAction<"SET_CONDITION", ISearchCondition>;

export type DeleteMovieAction = IAction<"DELETE_MOVIE", string>;

export type MovieActionsType = SaveMovieAction | SetLoadingAction | SetConditionAction | DeleteMovieAction;

const saveMovieAction = (movies: IMovie[], total: number): SaveMovieAction => ({
  type: 'SAVE_MOVIE',
  payload: {
    movies,
    total
  }
})

const setLoadingAction = (loading: boolean): SetLoadingAction => ({
  type: 'SET_LOADING',
  payload: loading
})

const setConditionAction = (condition: ISearchCondition): SetConditionAction => ({
  type: "SET_CONDITION",
  payload: condition
})

const deleteMovieAction = (movieId: string): DeleteMovieAction => ({
  type: "DELETE_MOVIE",
  payload: movieId
})

const fetchMovies = (condition: ISearchCondition)
  : ThunkAction<Promise<void>, IRootState, any, MovieActionsType> => {
  return async (dispatch, getState) => {
    dispatch(setLoadingAction(true));

    dispatch(setConditionAction(condition));

    const curCondition = getState().movie.condition;
    const resp = await getMovies(curCondition);
    dispatch(saveMovieAction(resp.data, resp.total));

    dispatch(setLoadingAction(false));
  }
}

const deleteMovie = (id: string)
  : ThunkAction<Promise<void>, IRootState, any, MovieActionsType> => {
  return async (dispatch, getState) => {
    dispatch(setLoadingAction(true));
    deleteMovie(id);
    dispatch(deleteMovieAction(id));
    dispatch(setLoadingAction(false));
  }
}


const MovieActions = {
  saveMovieAction,
  setLoadingAction,
  setConditionAction,
  deleteMovieAction,
  fetchMovies,
  deleteMovie
}
export default MovieActions;

