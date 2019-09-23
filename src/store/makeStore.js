import React, { useState, useMemo, useContext } from "react";

export default function makeStore() {
  // Create a new store for this store instance
  const context = React.createContext();

  // Make a provider that takes initial state
  const Provider = ({ initialState, children }) => {
    const [state, setState] = useState(initialState);

    const contextValue = useMemo(() => [state, setState], [state]);

    return <context.Provider value={contextValue}>{children}</context.Provider>;
  };

  // a hooks to consume the context
  const useStore = () => useContext(context);

  return { Provider, useStore };
}
