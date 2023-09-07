import { useContext } from "react";
import { ValueContext, DispatchContext } from "./CounterContextProvider";

export function useCounterContextProviderValue() {
  const value = useContext(ValueContext);
  if (value == null) {
    throw new Error("Should be with-in Context.Provider");
  }
  return value;
}

export function useCounterContextProviderDispatch() {
  const value = useContext(DispatchContext);
  if (value == null) {
    throw new Error("Should be with-in Context.Provider");
  }
  return value;
}
