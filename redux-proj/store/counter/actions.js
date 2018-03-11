import * as counterTypes from "./actionTypes";
// Defintion de l'action
export default {
  increment: (payload = 1) => {
    return {
      type: counterTypes.INCREMENT,
      payload: 1
    };
  }
};
