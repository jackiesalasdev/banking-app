import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import Deposit from "./comps/Admin/Deposit/Deposit";
import Withdraw from "./comps/Admin/Withdraw/Withdraw";
import Transfer from "./comps/Admin/Transfer/Transfer";
import Accounts from "./comps/Admin/Accounts/Accounts";
import Creator from "./comps/Admin/Creator/Creator";
import { useSetAuth, useGetAuth } from "./context/Auth/AuthProvider";
import { Redirect } from "react-router-dom";

export default function BankingApp() {
  const {path,url} = useRouteMatch()
  const setAuth = useSetAuth();
  const user = useGetAuth();
  

  function handleSignout() {
    setAuth({ type: "logout" });
  }
  if (!user) {
    return <Redirect to="/signin" />;
  }
  if (user.id !== "admin") {
    return <Redirect to="/" />;
  }

  return (
    <div className="admin">
      <button onClick={handleSignout} className="app__signout">
        SIGN OUT
      </button>
      <nav className="admin__nav">
        <NavLink to={`${url}/deposit`}>Deposit</NavLink>
        <NavLink to={`${url}/withdraw`}>Withdraw</NavLink>
        <NavLink to={`${url}/transfer`}>Transfer</NavLink>
        <NavLink to={`${url}/create`}>Create Account</NavLink>
      </nav>

      <div className="admin__accounts">
        <Accounts />
      </div>
      <div className="admin__forms">
        <Switch>
          <Route path={`${path}/deposit`} component={Deposit} />
          <Route path={`${path}/withdraw`} component={Withdraw} />
          <Route path={`${path}/transfer`} component={Transfer} />
          <Route path={`${path}/create`} component={Creator} />
        </Switch>
      </div>
    </div>
  );
}
