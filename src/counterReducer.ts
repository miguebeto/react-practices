import { CounterState } from "./interfaces";
import { CounterAction } from "./action";

//4
export const counterReducer = (
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
