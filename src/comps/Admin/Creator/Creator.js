import useCreator from "./useCreator";

export default function Creator() {
  const {
    error,
    balance,
    name,
    email,
    handleEmailChange,
    handleNameChange,
    handleCreate,
    handleBalanceChange,
  } = useCreator();
  return (
    <form className="signin__form" onSubmit={handleCreate}>
      <h1 className="signin-heading">Create Account</h1>
      <p className="signin__error">{error}</p>
      <div className="input-group income">
        <input
          required
          type="email"
          placeholder="Email"
          value={email}
          autoComplete="off"
          onChange={handleEmailChange}
        />

        <input
          required
          type="text"
          placeholder="Account Name"
          value={name}
          autoComplete="off"
          onChange={handleNameChange}
        />
        <input
          type="number"
          placeholder="Available Balance"
          autoComplete="off"
          value={balance}
          onChange={handleBalanceChange}
        />
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}
