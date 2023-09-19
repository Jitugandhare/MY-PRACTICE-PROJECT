import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";
import axios from "axios";

export const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPass]=useState('')

  let dispatch=useDispatch()
  let loginFunc = (e) => {
    e.preventDefault();
    dispatch({type:LOGIN_REQUEST})
    axios.post('https://reqres.in/api/login',{email,password})
    .then((data)=>{dispatch({type:LOGIN_SUCCESS,payload:data.data.token})})
    dispatch({type:LOGIN_FAILURE})
  }

  return (
    <DIV>
      <h2>Log In</h2>
      <input data-testid="user-email" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        value={password} onChange={(e)=>setPass(e.target.value)}
      />
      <button data-testid="user-login" onClick={()=>{loginFunc()}}>Log In</button>
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
