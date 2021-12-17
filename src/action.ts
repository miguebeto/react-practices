//3
export type Actions =
  | { type: "increseBy"; payload: { value: number } }
  | { type: "reset" };

export const doReset = (): Actions => ({
  type: "reset"
});

export const doIncreseBy = (value: number): Actions => ({
  type: "increseBy",
  payload: { value }
});
