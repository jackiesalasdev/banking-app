import React from "react";
import { BudgetProvider } from "./context/Budget/BudgetProvider";
import Header from "./comps/Budget/Header";
import Balance from "./comps/Budget/Balance";
import IncomeList from "./comps/Budget/IncomeList";
import ExpenseList from "./comps/Budget/ExpenseList";
import AddTransaction from "./comps/Budget/AddTransaction";

const BudgetApp = () => {
  return (
    <BudgetProvider>
      <div className="app">
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
