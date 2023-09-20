import React, { useState } from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/Authentication/action";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector(store => store.authReducer.isAuth)
  const err=useSelector(store=>store.authReducer.isError)
  const handleLogin = () => {
    let userData = { email, password };
    dispatch(login(userData));

    console.log(userData);
  };

  return (
    <DIV auth={auth} isError={err}>
      <h1>{auth ? "Login Successful" : "Login Unsuccessfull"}</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;

  h1 {
    color: ${({ auth }) => (auth ? "green" : "red")};
  }
  input {
    height: 30px;
    border: ${({ isError }) => (isError ? "2px solid red" : "2px solid grey")};
  }

  button {
    height: 35px;
  }
`;
