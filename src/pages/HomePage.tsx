import React from "react";
import { Navigate } from "react-router-dom";
import { removeUser } from "../store/slices/userSlice";
import {useAppDispatch} from '../hooks/redux-hooks'

import { useAuth } from "../hooks/use-auth";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    <Navigate replace to="/login" />
  );
};

export default HomePage;
