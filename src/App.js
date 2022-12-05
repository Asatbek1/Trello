import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/validation/HomePage";
import LoginPage from "./components/validation/LoginPage";
import RegisterPage from "./components/validation/RegisterPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default App;
