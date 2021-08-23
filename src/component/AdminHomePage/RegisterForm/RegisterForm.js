import React from "react";
import "./RegisterForm.css";

function RegisterForm() {
  return (
    <table className="AddUserTable">
      <tr>
        <td>
          <h1>Add User</h1>
          <form className="AddUserForm">
            <div>
              <label>Account Name</label>
              <input type="text" name="accountName" required></input>
            </div>

            <div>
              <label>Account Number</label>
              <input type="number" name="accountNumber"></input>
            </div>

            <div>
              <label>Balance</label>
              <input type="text" name="Balance"></input>
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </td>
      </tr>
    </table>
  );
}
export default RegisterForm;
