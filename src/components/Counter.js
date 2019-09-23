import React from "react";
import {
  useCount,
  useIncrement,
  useDecrement,
  useAsyncIncrement
} from "../store/counter";

export default function Counter() {
  const count = useCount();
  const increment = useIncrement();
  const decrement = useDecrement();
  const asyncIncrement = useAsyncIncrement();

  return (
    <div>
      <div>Counts: {count}</div>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={asyncIncrement}>increment ( 1 sec )</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </div>
  );
}
