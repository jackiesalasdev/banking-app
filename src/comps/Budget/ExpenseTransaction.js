import React, { useContext } from "react";
import { BudgetContext } from "../../context/Budget/BudgetProvider";

const ExpenseTransaction = ({ expenseTransaction }) => {
  const { deleteTransaction } = useContext(BudgetContext);

  return (
    <li className="transaction">
      <span className="transaction-text">{expenseTransaction.expenseText}</span>
      <span className="transaction-amount">
        ${expenseTransaction.expenseAmount}
      </span>
      <button
        onClick={() => deleteTransaction(expenseTransaction.id)}
        className="delete-btn"
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default ExpenseTransaction;
