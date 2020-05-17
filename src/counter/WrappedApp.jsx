import React from "react";
import { Provider } from "react-redux";
import CounterApp from "../counter/CounterApp";
import allReducers from "../counter/reducers";
import { createStore } from "redux";

const store = createStore(allReducers);

function WrappedApp() {
  return (
    <div>
      <Provider store={store}>
        <CounterApp />
      </Provider>
    </div>
  );
}

export default WrappedApp;
