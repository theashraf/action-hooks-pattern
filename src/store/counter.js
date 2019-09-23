import makeStore from "./makeStore";

const Store = makeStore();

export const Provider = Store.Provider;

export const initialState = 0;

export function useCount() {
  const [count] = Store.useStore();
  return count;
}

export function useIncrement() {
  const [count, setCount] = Store.useStore();

  return () => {
    setCount(count + 1);
  };
}

export function useDecrement() {
  const [count, setCount] = Store.useStore();

  return () => {
    setCount(count - 1);
  };
}

// async actions
export function useAsyncIncrement() {
  const increment = useIncrement();

  return async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    increment();
  };
}
