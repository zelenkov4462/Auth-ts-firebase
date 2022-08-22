import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../hooks/redux-hooks";
import Form from "./Form";
import { setUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (
    email: string,
    password: string,
    setEmail: (a: string) => void,
    setPass: (a: string) => void
  ) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/");
        setEmail("");
        setPass("");
      })
      .catch(() => {
        alert("Invalid user!");
        setEmail("");
        setPass("");
      });
  };
  return <Form title="Sign in" handleClick={handleLogin} />;
};

export default Login;
