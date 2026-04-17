import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout'
import Dashboard from '../pages/backend/Dashboard'
import MyLinks from '../pages/backend/MyLinks'


const DefaultRoutes = () => {
  return (
    <div>
    <DefaultLayout>
        <Routes>
           <Route path='/' element={<Dashboard/>}/>
           <Route path='/links' element={<MyLinks/>}/>
        </Routes>
        </DefaultLayout>
    </div>
  )
}

export default DefaultRoutes
