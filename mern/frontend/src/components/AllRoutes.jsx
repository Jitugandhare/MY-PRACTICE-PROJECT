import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Signup from './signup'
import Login from './login'
import Blog from './Blog'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/blog" element={<Blog/>}/>
    </Routes>
  )
}

export default AllRoutes