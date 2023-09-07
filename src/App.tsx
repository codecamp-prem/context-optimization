import { CounterDisplay } from "./CounterDisplay";
import { CounterButtons } from "./CounterButtons";
import { CounterContextProvider } from "./CounterContextProvider";

export default function App() {
  return (
    <>
      <CounterContextProvider>
        <CounterDisplay />
        <CounterButtons />
      </CounterContextProvider>
    </>
  );
}
