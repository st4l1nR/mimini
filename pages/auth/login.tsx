import React from "react";
import { Login } from "../../components/index";
import Cookies from "universal-cookie";

const login = () => {
  const cookies = new Cookies();

  const user = cookies.get("user");
  if (user) {
    return <></>;
  }
  return <>{!user && <Login />}</>;
};

export default login;
