import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux-hooks";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { setUser } from "../store/slices/userSlice";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (
    email: string,
    password: string,
    setEmail: (a: string) => void,
    setPass: (a: string) => void
  ) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
        console.error();
        setEmail("");
        setPass("");
      });
  };
  return <Form title="register" handleClick={handleRegister} />;
};

export default SignUp;
