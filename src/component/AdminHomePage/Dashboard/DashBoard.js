import React from "react";
import "./DashBoard.css";

function DashBoard() {
  return (
    <section className="dashBoardContainer">
      <div className="dashBoard">
        <h2>Users</h2>

        <table className="UserListTable">
          <thead>
            <tr>
              <th>Account Name</th>
              <th>Account Number</th>
              <th>Available Balance</th>
              <th></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </section>
  );
}

export default DashBoard;
