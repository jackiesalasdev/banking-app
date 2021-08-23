import useTransfer from "./useTransfer";

export default function Transfer() {
  const {
    error,
    amount,
    account,
    receiver,
    handleAccChange,
    handleAmountChange,
    handleTransfer,
    handleReceiverChange,
  } = useTransfer();
  return (
    <form className="signin__form" onSubmit={handleTransfer}>
      <h1 className="signin-heading">Transfer</h1>
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
          required
          type="text"
          placeholder="Destination Account No."
          value={receiver}
          autoComplete="off"
          onChange={handleReceiverChange}
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
