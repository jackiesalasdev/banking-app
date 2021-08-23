import useSignin from "./useSignin";

export default function Signin() {
  const {
    error,
    email,
    password,
    handleEmailChange,
    handlePwChange,
    handleSubmit,
  } = useSignin();
  return (
    <div className="signin">
      <form className="signin__form" onSubmit={handleSubmit}>
        <h1 className="signin-heading">Sign in</h1>
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
            type="password"
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={handlePwChange}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
