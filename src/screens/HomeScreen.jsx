import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <div className='h-full'>
      <SideBar />
      <div className="align-middle justify-center p-2 absolute pt-14 left-0 right-0 min-h-full bg--50 md:left-48">
        <Outlet />
      </div>
    </div>
  )
}

export default HomeScreen