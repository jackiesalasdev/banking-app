import useWithdraw from "./useWithdraw";

export default function Withdraw() {
  const {
    error,
    amount,
    account,
    handleAccChange,
    handleAmountChange,
    handleWithdraw,
  } = useWithdraw();
  return (
    <form className="signin__form" onSubmit={handleWithdraw}>
      <h1 className="signin-heading">Withdraw</h1>
      <p className="signin__error">{error}</p>
      <div className="input-group income">
        <input
          required
          type="text"
          placeholder="Account No."
          value={account}
          autoComplete="off"
          onChange={handleAccChange}
        />
        <input
          type="number"
          placeholder="Amount"
          autoComplete="off"
          value={amount}
          onChange={handleAmountChange}
        />
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}
