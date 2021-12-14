import React, { useState } from "react";

interface Props {
  initialValue?: number;
}
interface CounterState {
  counter: number;
  clicks: number;
}

export const Counterby = ({ initialValue = 5 }: Props) => {
  const [{ counter, clicks }, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0
  }); //1

  //2
  const incrementar = (numero: number = 1) => {
    setCounterState(({ counter, clicks }) => ({
      counter: counter + numero,
      clicks: clicks + 1
    }));
  };
  //3
  return (
    <div className="counter">
      <h3>Counterby: {JSON.stringify(counter)}</h3>
      <h3>Click: {JSON.stringify(clicks)}</h3>
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
          setCounterState({ counter: counter, clicks: clicks + 1 })
        }
      >
        Click
      </button>
      <button
        className="btn btn-outline-danger"
        onClick={() => setCounterState({ counter: 0, clicks: 0 })}
      >
        Reset
      </button>
    </div>
  );
};
