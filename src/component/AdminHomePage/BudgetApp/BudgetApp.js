import React from "react";
import Header from "./BudgetAppComponents/Header";
import Balance from "./BudgetAppComponents/Balance";
import IncomeList from "./BudgetAppComponents/IncomeList";
import ExpenseList from "./BudgetAppComponents/ExpenseList";
import AddTransaction from "./BudgetAppComponents/AddTransaction";
import { GlobalContextProvider } from "./context/BudgetAppGlobalState";
import "./BudgetApp.css";

const BudgetApp = () => {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <IncomeList />
          <ExpenseList />
          <AddTransaction />
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default BudgetApp;
