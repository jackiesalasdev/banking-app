import React from "react";
import HomeClock from "./clockH/Home-clock";
import LogIn from "./log-in/LogIn";
import "./PublicHomePage.css";
// import BudgetApp from "./BudgetApp/BudgetApp";
function PublicHomePage() {
  return (
    <section class="PublicHomePageContainer">
      <div className="ComponentContainer">
        <HomeClock />
        <LogIn />
      </div>
    </section>
  );
}

export default PublicHomePage;
