import { combineReducers, createStore } from "redux";

import counterActions from "./store/counter/actions";
import counterReducer from "./store/counter/reducer";

const store = createStore(
  combineReducers({
    counter: counterReducer
  })
);
// ecouter les modifs du store
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(counterActions.increment(1));
store.dispatch(counterActions.increment(2));
store.dispatch(counterActions.increment(3));
