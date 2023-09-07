import { useCounterContextProviderValue } from "./useCounterContextProvider";

export function CounterDisplay() {
  const {
    state: { count },
  } = useCounterContextProviderValue();

  return (
    <>
      <div>{count}</div>
    </>
  );
}
