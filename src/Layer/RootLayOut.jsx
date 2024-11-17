import React from 'react'
import Dashboard from '../Components/Dashboard'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'

const RootLayOut = () => {
  return (
    <div className='grid grid-cols-[1fr_4fr] bg-black'>
    <Sidebar />
   <div className='bg-white  m-5 rounded-3xl overflow-hidden'>
   <Outlet/>
   </div>
        
    </div>
  )
}

export default RootLayOut