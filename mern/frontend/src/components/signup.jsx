import React, { useState } from 'react';
import { Box, Input, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { register } from '../redux/authReducer/action';

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    // const dispatch=useDispatch()
    const navigate=useNavigate()
  
    const handleSignup = () => {
      const user = { username, password, email, avatar };
      // dispatch((register(user))
      // .then((res)=>{
      //      navigate("/signin")
      // }).catch((err)=>console.log(err))
      // )
      fetch("https://backend-mock-6-ao4x.onrender.com/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          navigate("/signin")
        })
        .catch(err => console.log(err));
    };
  
    return (
      <Box w="50%" m="auto" p="20px">
        <VStack spacing={4} align="center">
          <Input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
          <Input placeholder="Avatar" value={avatar} onChange={e => setAvatar(e.target.value)} />
          <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <Input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <Button colorScheme="blue" onClick={handleSignup}>Sign Up</Button>
        </VStack>
      </Box>
    );
  };
  
  export default Signup;
  