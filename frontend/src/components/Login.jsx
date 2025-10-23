import React from "react";
import { loginUser } from "../api";

const Login = () => {
  const handleLogin = async () => {
    // replace email and password with actual (demo is given)
    const email = "test@example.com";
    const password = "password123";
    await loginUser(email, password);
  };

  // call the function immediately
  handleLogin();

  return <div>Login Page Coming Soon!</div>;
};

export default Login;

