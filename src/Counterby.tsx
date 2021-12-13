import React, { useState } from 'react';

interface Props {
  initialValue?: number;
}

export const Counterby = ({ initialValue = 5 }): Props => {
  const [counterState, setCounterState] = useState({
    counter: initialValue,
    clicks: 0,
  }); //1

  const { counter, clicks } = counterState;

  //2
  const incrementar = (numero: number = 1) => {
    setCounterState((prev) => ({
      counter: prev.counter + numero,
      clicks: prev.clicks + 1,
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
          setCounterState({ ...counterState, clicks: clicks + 1 })
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
