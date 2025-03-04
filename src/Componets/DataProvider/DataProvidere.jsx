/* eslint-disable react/prop-types */

import { createContext, useReducer } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children, reducer, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState); // Move useReducer outside JSX

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
