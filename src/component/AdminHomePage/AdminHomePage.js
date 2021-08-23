import React from "react";
import "./AdminHomePage.css";
import DashBoard from "./Dashboard/DashBoard";
import NavBar from "./navigationBar/NavBar";
import RegisterForm from "./RegisterForm/RegisterForm";
import BudgetApp from "./BudgetApp/BudgetApp";
function AdminHomePage() {
  return (
    <section class="adminHomePageContainer">
      <div id="NavBarContainer">
        <NavBar />
      </div>
      <div class="dashContainer">
        <RegisterForm />
        <DashBoard />
      </div>
      {/* <div>
        <BudgetApp />
      </div> */}
    </section>
  );
}

export default AdminHomePage;
