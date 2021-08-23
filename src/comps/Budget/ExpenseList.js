import React, { useContext } from "react";
import { BudgetContext } from "../../context/Budget/BudgetProvider";
import ExpenseTransaction from "./ExpenseTransaction";
import { useGetAuth } from "../../context/Auth/AuthProvider";

const ExpenseList = () => {
  const user = useGetAuth();
  const { expenseTransactions } = useContext(BudgetContext);

  console.log(expenseTransactions);

  return (
    <div className="transactions transactions-expense">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {expenseTransactions
          .filter((tx) => tx.account === user.id)
          .map((expenseTransaction) => (
            <ExpenseTransaction
              key={expenseTransaction.id}
              expenseTransaction={expenseTransaction}
            />
          ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
