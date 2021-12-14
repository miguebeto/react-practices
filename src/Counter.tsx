import React, { useState } from "react";

interface Props {
  initialValue?: number;
}

export const Counter = ({ initialValue = 5 }: Props) => {
  const [counterState, setCounterState] = useState({
    counter: initialValue,
    clicks: 0
  }); //1

  //2
  const incrementar = (numero: number = 1) => {
    setCounterState({
      ...counterState,
      counter: counterState.counter + numero,
      clicks: counterState.clicks + 1
    });
  };
  //3
  return (
    <div className="counter">
      <h3>Counter: {JSON.stringify(counterState.counter)}</h3>
      <h3>Click: {JSON.stringify(counterState.clicks)}</h3>
      <span>valor: </span>
      <br />
      <button
        className="btn btn-outline-primary"
        onClick={() => incrementar(1)}
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => incrementar(2)}
      >
        +2
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={(e) =>
          setCounterState({ ...counterState, clicks: counterState.clicks + 1 })
        }
      >
        Click
      </button>
      <button
        className="btn btn-outline-danger"
        onClick={() =>
          setCounterState({ ...counterState, counter: 0, clicks: 0 })
        }
      >
        Reset
      </button>
    </div>
  );
};
