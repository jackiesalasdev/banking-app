import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useGetAcc } from "../../context/Accounts/AccountsProvider";

export default function useSignin() {
  const accounts = useGetAcc();
  console.log(accounts);
  const history = useHistory();
  const [error, SetError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePwChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    SetError(null);
    e.preventDefault();

    const foundAcc = accounts.find((account) => account.email === email);

    console.log(foundAcc);

    if (!foundAcc || foundAcc.password != password) {
      SetError("Password is incorrect or user doesn't exist");
      setEmail("");
      setPassword("");
      return;
    }
  }
  return {
    error,
    email,
    password,
    handlePwChange,
    handleEmailChange,
    handleSubmit,
  };
}
