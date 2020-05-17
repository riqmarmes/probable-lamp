import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function CounterApp() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default CounterApp;
