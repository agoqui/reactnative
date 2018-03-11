import * as types from "./actionTypes";

const initialState = {
  counter: 0
};

// reducer
export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.MOVIES_INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return state;
  }
}

// selectors
export function getMoviesCounter(state) {
  return state.movies.counter;
}
