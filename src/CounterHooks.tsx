import { useCounter } from "./useCounter";

//1
export const CounterHooks = () => {
  const { counter, elementToAnimate, handleClick } = useCounter({
    maxCount: 15
  });
  return (
    <div className="counter">
      <h1>Counter:</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>
      <br />
      <button className="btn btn-outline-primary" onClick={handleClick}>
        +1
      </button>
    </div>
  );
};
