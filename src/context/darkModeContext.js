import darkModeReducer from "./darkModeReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  darkMode: false,
};
export const DarkModeContext = createContext(INITIAL_STATE);
export const DarkModeContextProvider = ({ children }) => {
  const [state, darkModeDispatch] = useReducer(darkModeReducer, INITIAL_STATE);
  return (
    <DarkModeContext.Provider
      value={{ darkMode: state.darkMode, darkModeDispatch }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
