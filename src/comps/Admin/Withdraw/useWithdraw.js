import { useState } from "react";
import { useSetAcc } from "../../../context/Accounts/AccountsProvider";

export default function useWithdraw() {
  const [error, SetError] = useState(null);
  const setAcc = useSetAcc();
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState("");

  function handleAmountChange(e) {
    setAmount(e.target.value);
  }
  function handleAccChange(e) {
    setAccount(e.target.value);
  }

  function handleWithdraw(e) {
    SetError(null);
    e.preventDefault();
    setAcc({
      type: "withdraw",
      payload: {
        id: account,
        amount: amount,
      },
    });

    setAmount("");
    setAccount("");
  }
  return {
    error,
    amount,
    account,
    handleAccChange,
    handleAmountChange,
    handleWithdraw,
  };
}
