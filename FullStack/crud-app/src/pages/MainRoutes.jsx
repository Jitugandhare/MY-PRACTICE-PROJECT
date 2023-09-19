import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from './Login'
import { Admin } from './Admin'
import { HomePage } from './HomePage'

export const MainRoutes = () => {
  return (
      <div>
          <Routes>
              <Route path='/' element={<HomePage/> } />
              <Route path='/login' element={<Login/> } />
              <Route path='/admin' element={<Admin/> } />
          </Routes>
    </div>
  )
}
