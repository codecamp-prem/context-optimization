import { Dispatch, ReactNode, createContext, useReducer } from "react";

type State = {
  count: number;
};

type Action = {
  type: "INCREMENT" | "DECREMENT";
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error("Invalid Action");
  }
}

type ValueContext = {
  state: { count: number };
};
export const ValueContext = createContext<ValueContext | null>(null);

type DispatchContext = {
  dispatch: Dispatch<Action>;
};
export const DispatchContext = createContext<DispatchContext | null>(null);

type CounterContextProviderProps = {
  children: ReactNode;
};
export function CounterContextProvider({
  children,
}: CounterContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <DispatchContext.Provider value={{ dispatch }}>
        <ValueContext.Provider value={{ state }}>
          {children}
        </ValueContext.Provider>
      </DispatchContext.Provider>
    </>
  );
}
