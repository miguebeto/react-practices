import { useCounter } from "./useCounter";

//1
export const CounterHooks = () => {
  const { counter, counterRef, handleClick } = useCounter();
  return (
    <div className="counter">
      <h1>Counter:</h1>
      <h2 ref={counterRef}>{counter}</h2>
      <br />
      <button className="btn btn-outline-primary" onClick={handleClick}>
        +1
      </button>
    </div>
  );
};
