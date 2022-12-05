import React from "react";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

const RegisterPage = () => {
  return (
    <div>
      <h1>Регистрация</h1>
      <SignUp />
      <p>
        У меня уже есть аккаунт, <Link to="/login">Войти</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
