import "./accounts.css";
import { useGetAcc } from "../../../context/Accounts/AccountsProvider";

export default function Accounts() {
  const accounts = useGetAcc();
  return (
    <ul className="accounts">
      <li className="account">
        <div className="account_number">Account#</div>
        <div className="account_name">Name</div>
        <div className="account_email">Email</div>
        <div className="account_balance">Balance</div>
      </li>
      {accounts
        .filter((account) => account.id !== "admin")
        .map((account) => {
          return (
            <li key={account.id} className="account">
              <div className="account_number">{account.id}</div>
              <div className="account_name">{account.name}</div>
              <div className="account_email">{account.email}</div>
              <div className="account_balance">${account.balance}</div>
            </li>
          );
        })}
    </ul>
  );
}
