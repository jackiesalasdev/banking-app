import React from "react";
import { useGetAuth } from "../../context/Auth/AuthProvider";

const Header = () => {
  const user = useGetAuth();
  return (
    <div className="header">
      <h1>Hi! {user.name}</h1>
    </div>
  );
};

export default Header;
