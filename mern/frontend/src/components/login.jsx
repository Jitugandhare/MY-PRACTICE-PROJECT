import React, { useState } from 'react';
import { Box, Input, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authReducer/action';

const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleLogin = () => {
      const user = { password, email };
      dispatch(login(user))
        .then(() => navigate("/blog"))
        .catch(err => console.log(err));
    };
  
    return (
      <Box w="50%" m="auto" p="20px">
        <VStack spacing={4} align="center">
          <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <Input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <Button colorScheme="blue" onClick={handleLogin}>Login</Button>
        </VStack>
      </Box>
    );
  };
  
  export default Login;
  