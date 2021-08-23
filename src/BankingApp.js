import { Link } from "react-router-dom";

export default function BankingApp() {
  return (
    <div className="admin">
      <nav className="admin__nav">
        <Link to="/admin/deposit">Deposit</Link>
        <Link to="/admin/withdraw">Withdraw</Link>
        <Link to="/admin/transfer">Transfer</Link>
      </nav>

      <div className="admin__forms">FORMS</div>
      <div className="admin__accounts">ACCOUTS</div>
    </div>
  );
}
