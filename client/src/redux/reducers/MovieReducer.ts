import { Reducer } from "react";
import { IMovie, ISearchCondition } from "../../services/commonTypes";
import { DeleteMovieAction, MovieActionsType, SaveMovieAction, SetConditionAction, SetLoadingAction } from "../actions/MovieAction";

export type IMovieCondition = Required<ISearchCondition>;

export interface IMovieState {
  data: IMovie[];
  total: number;
  condition: IMovieCondition;
  isLoading: boolean;
  totalPage: number;
}

export type MovieReducer<Action> = Reducer<IMovieState, Action>;

const defaultState: IMovieState = {
  data: [],
  total: 0,
  condition: {
    page: 1,
    limit: 10,
    key: "",
  },
  isLoading: false,
  totalPage: 0,
}

const saveMovie: MovieReducer<SaveMovieAction> = (state, action) => ({
  ...state,
  data: action.payload.movies,
  total: action.payload.total,
  totalPage: Math.ceil(action.payload.total / state.condition.limit),
})

const setCondition: MovieReducer<SetConditionAction> = (state, action) => {
  const newCondition = ({
    ...state,
    condition: {
      ...state.condition,
      ...action.payload,
    },
  });
  newCondition.totalPage = Math.ceil(newCondition.total / newCondition.condition.limit);
  return newCondition;
}

const deletMovie: MovieReducer<DeleteMovieAction> = (state, action) => ({
  ...state,
  data: state.data.filter(movie => movie._id !== action.payload),
  total: state.total - 1,
});

const setLoading: MovieReducer<SetLoadingAction> = (state, action) => ({
  ...state,
  isLoading: action.payload,
});

const movieReducer = (state: IMovieState = defaultState, action: MovieActionsType) => {
  switch (action.type) {
    case "DELETE_MOVIE":
      return deletMovie(state, action);
    case "SAVE_MOVIE":
      return saveMovie(state, action)
    case "SET_LOADING":
      return setLoading(state, action);
    case "SET_CONDITION":
      return setCondition(state, action)
    default:
      return state;
  }
}

export default movieReducer;