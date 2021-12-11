import React, { useState } from 'react';

export const Counter = (): void => {
  const [counter, setCounter] = useState(0); //1

  //2
  const incrementar = (numero: number = 1) => {
    setCounter(counter + numero);
  };
  //3
  return (
    <div className="counter">
      <h3>Counter: useState</h3>
      <span>valor: {counter}</span>
      <br />
      <button className="btn btn-outline-primary" onClick={() => incrementar()}>
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => incrementar(2)}
      >
        +2
      </button>
      <button className="btn btn-outline-danger" onClick={() => setCounter(0)}>
        Reset
      </button>
    </div>
  );
};
