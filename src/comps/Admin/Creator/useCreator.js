import { useState } from "react";
import { useSetAcc } from "../../../context/Accounts/AccountsProvider";
export default function useTransfer() {
  const setAcc = useSetAcc();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [balance, setBalance] = useState("");
  const [name, setName] = useState("");

  function handleCreate(e) {
    setError(null);
    e.preventDefault();
    setAcc({
      type: "add",
      payload: {
        email: email,
        name: name,
        balance: balance,
        id: Math.floor(1000 + Math.random() * 9000).toString(),
        password: "123",
      },
    });
    setBalance("");
    setName("");
    setEmail("");
  }
  return {
    error,
    balance,
    name,
    email,
    handleBalanceChange: (e) => setBalance(e.target.value),
    handleEmailChange: (e) => setEmail(e.target.value),
    handleNameChange: (e) => setName(e.target.value),
    handleCreate,
  };
}
