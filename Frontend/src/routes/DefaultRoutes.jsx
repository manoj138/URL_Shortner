import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout'
import Dashboard from '../pages/backend/Dashboard'


const DefaultRoutes = () => {
  return (
    <div>
    <DefaultLayout>
        <Routes>
           <Route path='/' element={<Dashboard/>}/>
        </Routes>
        </DefaultLayout>
    </div>
  )
}

export default DefaultRoutes