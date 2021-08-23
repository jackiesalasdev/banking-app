import React from "react";
import { BudgetProvider } from "./context/Budget/BudgetProvider";
import Header from "./comps/Budget/Header";
import Balance from "./comps/Budget/Balance";
import IncomeList from "./comps/Budget/IncomeList";
import ExpenseList from "./comps/Budget/ExpenseList";
import AddTransaction from "./comps/Budget/AddTransaction";
import { useSetAuth, useGetAuth } from "./context/Auth/AuthProvider";
import { Redirect } from "react-router-dom";

const BudgetApp = () => {
  const setAuth = useSetAuth();
  const user = useGetAuth();

  function handleSignout() {
    setAuth({ type: "logout" });
  }
  if (!user) {
    return <Redirect to="./signin" />;
  }

  return (
    <BudgetProvider>
      <div className="app">
        <button onClick={handleSignout} className="app__signout">
          SIGN OUT
        </button>
        <Header />
        <Balance />
        <IncomeList />
        <ExpenseList />
        <AddTransaction />
      </div>
    </BudgetProvider>
  );
};

export default BudgetApp;
