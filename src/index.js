import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AccountsProvider from "./context/Accounts/AccountsProvider";
import AuthProvider from "./context/Auth/AuthProvider";

ReactDOM.render(
  <BrowserRouter basename="/banking-app">
    <AccountsProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AccountsProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
