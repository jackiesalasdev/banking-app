import { useState } from "react";
import { useSetAcc } from "../../../context/Accounts/AccountsProvider";

export default function useTransfer() {
  const setAcc = useSetAcc();
  const [error, SetError] = useState(null);
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState("");

  function handleReceiverChange(e) {
    setReceiver(e.target.value);
  }

  function handleAmountChange(e) {
    setAmount(e.target.value);
  }
  function handleAccChange(e) {
    setAccount(e.target.value);
  }

  function handleTransfer(e) {
    SetError(null);
    e.preventDefault();
    setAcc({
      type: "transfer",
      payload: { from: account, amount: amount, to: receiver },
    });

    setAmount("");
    setReceiver("");
    setAccount("");
  }
  return {
    error,
    amount,
    account,
    receiver,
    handleAccChange,
    handleAmountChange,
    handleTransfer,
    handleReceiverChange,
  };
}
