import React, { useState, FC } from "react";

interface FormProps {
  title: string;
  handleClick: (
    email: string,
    pass: string,
    setEmail: (a: string) => void,
    setPass: (a: string) => void
  ) => void;
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <button onClick={() => handleClick(email, pass, setEmail, setPass)}>
        {title}
      </button>
    </div>
  );
};

export default Form;
