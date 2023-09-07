import { useCounterContextProviderDispatch } from "./useCounterContextProvider";

export function CounterButtons() {
  const { dispatch } = useCounterContextProviderDispatch();

  return (
    <>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </>
  );
}
