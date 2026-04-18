import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout'
import Dashboard from '../pages/backend/Dashboard'
import MyLinks from '../pages/backend/MyLinks'
import Login from '../pages/frontend/auth/Login'
import Register from '../pages/frontend/auth/Register'
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) return null; // Or a loading spinner
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

import LandingPage from '../pages/frontend/index'
import Solutions from '../pages/frontend/Solutions'

const DefaultRoutes = () => {
  return (
    <DefaultLayout>
        <Routes>
           {/* Public Routes */}
           <Route path='/' element={<LandingPage/>}/>
           <Route path='/solutions' element={<Solutions/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/signup' element={<Register/>}/>

           {/* Protected Routes */}
           <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
           <Route path='/links' element={<ProtectedRoute><MyLinks/></ProtectedRoute>}/>
        </Routes>
    </DefaultLayout>
  )
}

export default DefaultRoutes
