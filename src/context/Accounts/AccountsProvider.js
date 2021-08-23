import { createContext, useContext, useReducer } from "react";
import accountsReducer from "./AccountsReducer";

import { accounts } from "./accounts";

const dispatchContext = createContext();
const stateContext = createContext();
const initialState = JSON.parse(localStorage.getItem("accounts")) || accounts;

export default function AccountsProvider(props) {
  const [state, dispatch] = useReducer(accountsReducer, initialState);
  return (
    <stateContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        {props.children}
      </dispatchContext.Provider>
    </stateContext.Provider>
  );
}

export function useGetAcc() {
  const state = useContext(stateContext);
  return state;
}

export function useSetAcc() {
  const dispatch = useContext(dispatchContext);
  return dispatch;
}
