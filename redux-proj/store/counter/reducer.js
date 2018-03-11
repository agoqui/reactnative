import * as counterTypes from "./actionTypes";
const initialState = {
  counter: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case counterTypes.INCREMENT:
      // modifie le store d'une certaine maniere
      return {
        counter: state.counter + 1
      };
    default:
      return state;
  }
}
