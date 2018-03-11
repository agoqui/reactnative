import * as reducers from "./store/reducers";

import { combineReducers, createStore } from "redux";

import CounterScreen from "./containers/CounterScreen";
import IncreaseScreen from "./containers/IncreaseScreen";
import { Provider } from "react-redux";
import React from "react";
import { TabNavigator } from "react-navigation";

const store = createStore(
  combineReducers({
    ...reducers
  })
);

const App = TabNavigator({
  Increase: { screen: IncreaseScreen },
  Counter: { screen: CounterScreen }
});

class MainApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default MainApp;
