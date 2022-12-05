import React from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { removeUser } from "../../store/slices/userSlice";
import RootTrello from "../rootTrello/RootTrello";

const HomePage = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();
  return isAuth ? (
    <div>
      <button onClick={() => dispatch(removeUser())}>
        Logout from {email}
      </button>
      <RootTrello />
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
};
export default HomePage;


