import useDeposit from "./useDeposit";

export default function Deposit() {
  const {
    error,
    amount,
    account,
    handleAccChange,
    handleAmountChange,
    handleDeposit,
  } = useDeposit();
  return (
    <form className="signin__form" onSubmit={handleDeposit}>
      <h1 className="signin-heading">Deposit</h1>
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
