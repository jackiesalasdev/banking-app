import React, { useContext } from "react";
import { BudgetContext } from "../../context/Budget/BudgetProvider";
import IncomeTransaction from "./IncomeTransaction";
import { useGetAuth } from "../../context/Auth/AuthProvider";

const IncomeList = () => {
  const user = useGetAuth();
  const { incomeTransactions } = useContext(BudgetContext);

  console.log(incomeTransactions);

  return (
    <div className="transactions transactions-income">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {incomeTransactions
          .filter((tx) => tx.account === user.id)
          .map((incomeTransaction) => (
            <IncomeTransaction
              key={incomeTransaction.id}
              incomeTransaction={incomeTransaction}
            />
          ))}
      </ul>
    </div>
  );
};

export default IncomeList;
