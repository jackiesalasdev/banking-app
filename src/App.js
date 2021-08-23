import React from "react";
import BudgetApp from "./BudgetApp";
import { Switch, Route } from "react-router-dom";
import Signin from "./comps/Signin/Signin";
import BankingApp from "./BankingApp";

function App() {
  return (
    <Switch>
      <Route path="/signin" component={Signin} />
      <Route path="/admin" component={BankingApp} />
      <Route exact path="/" component={BudgetApp} />
    </Switch>
  );
}

export default App;
