import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../Redux/AuthReducer/action";

export const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const patchcoming=location.state?.from?.pathname || "/"



  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) {
      dispatch(login({ email, password })).then((res) => {
        navigate(patchcoming,{replace:true})
      }).catch((err) => {
        console.log(err)
      })
    }
}



  return (
    <DIV>
      <h2>Log In</h2>
      <input
        data-testid="user-email"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button data-testid="user-login" onClick={handleSubmit}>
        Log In
      </button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
