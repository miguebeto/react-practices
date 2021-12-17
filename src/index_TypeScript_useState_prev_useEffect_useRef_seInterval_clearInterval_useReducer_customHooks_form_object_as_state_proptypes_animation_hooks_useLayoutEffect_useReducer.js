import React, { useReducer, useState } from "react";

//1
interface CounterState {
  counter: number;
  prev: number;
  changes: number;
}

//2
const initialStage: CounterState = {
  counter: 10,
  prev: 15,
  changes: 20
};

//3
type CounterAction =
  | { type: "increseBy"; payload: { value: number } }
  | { type: "reset" };

//4
const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  const { counter, changes } = state;
  switch (action.type) {
    case "reset":
      return {
        counter: 0,
        prev: 0,
        changes: 0
      };
    case "increseBy":
      return {
        ...state,
        changes: changes + 1,
        prev: counter,
        counter: counter + action.payload.value
      };

    default:
      return state;
  }
};

export const CounterReducerComponent = ({ initialValue = 5 }: CounterState) => {
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
      <h1>CounterReducer:</h1>
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
