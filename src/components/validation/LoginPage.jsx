import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const LoginPage = () => {
  return (
    <LoginPages>
      <Login />
      <p>
        If there is no account <Link to="/register">Register!</Link>
      </p>
    </LoginPages>
  );
};

export default LoginPage;

const LoginPages = styled.div`
  /* margin:10% 40%; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border-radius: 8px;
  /* border: 2px solid red; */
  p {
    font-weight: 600;
    color: #ef0707;
  }
`;
