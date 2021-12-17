import React, { useReducer } from "react";
import { CounterState } from "./interfaces";
import { counterReducer } from "./counterReducer";

//2
const initialStage: CounterState = {
  counter: 10,
  prev: 15,
  changes: 20
};

export const CounterReducerRef = () => {
  //3
  const [counterState, dispatch] = useReducer(counterReducer, initialStage);
  //4
  const handleReset = () => {
    dispatch({
      type: "reset"
    });
  };

  const increseBy = (value: number) => {
    dispatch({
      type: "increseBy",
      payload: { value }
    });
  };

  //5
  return (
    <div className="counter">
      <h1>CounterReducerRef:</h1>
      <pre> {JSON.stringify(counterState)}</pre>
      <button className="btn btn-outline-primary" onClick={() => increseBy(1)}>
        +1
      </button>
      <button className="btn btn-outline-primary" onClick={() => increseBy(5)}>
        +5
      </button>
      <button className="btn btn-outline-primary" onClick={() => increseBy(10)}>
        +10
      </button>
      <button className="btn btn-outline-primary" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};
