//3
export type CounterAction =
  | { type: "increseBy"; payload: { value: number } }
  | { type: "reset" };
