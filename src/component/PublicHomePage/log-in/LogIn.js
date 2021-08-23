import React from "react";
import "./LogIn.css";
function LogIn() {
  return (
    <div className="container">
      <h1>Log in</h1>
      <form className="form">
        <label className="l1">Username:</label>
        <input type="text"></input>

        <label className="l1">Password:</label>

        <input
          type="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        ></input>
      </form>
      <button type="submit">Log in</button>
    </div>
  );
}

export default LogIn;
