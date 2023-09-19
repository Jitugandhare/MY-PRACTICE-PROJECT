import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const handleLogin = () => {
        let userData = { email, password }
        console.log(userData)
    }
    
  return (
    <div>
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
    </div>
  );
};
