import { createContext, useReducer, useContext } from "react";
import authReducer from "./authReducer";

//get
const initialState = JSON.parse(localStorage.getItem("user"));
const dispatchContext = createContext();
const stateContext = createContext();

export default function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <stateContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        {props.children}
      </dispatchContext.Provider>
    </stateContext.Provider>
  );
}

export function useGetAuth() {
  return useContext(stateContext);
}

export function useSetAuth() {
  return useContext(dispatchContext);
}
