import React, { useContext } from "react";
import { BudgetContext } from "../../context/Budget/BudgetProvider";

const IncomeTransaction = ({ incomeTransaction }) => {
  const { deleteTransaction } = useContext(BudgetContext);

  return (
    <li className="transaction">
      <span className="transaction-text">{incomeTransaction.incomeText}</span>
      <span className="transaction-amount">
        ${incomeTransaction.incomeAmount}
      </span>
      <button
        onClick={() => deleteTransaction(incomeTransaction.id)}
        className="delete-btn"
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default IncomeTransaction;
