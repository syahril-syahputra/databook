import React, { useContext, useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

import { dataContext } from '../App'
import axios from 'axios'


const HomeScreen = () => {

  const [data, dispatchData] = useContext(dataContext)

  const [categoryLoading, setcategoryLoading] = useState(false)

  useEffect(() => {
    if (data.category.length === 0 && !categoryLoading) {

      setcategoryLoading(true)
      axios.get("/fee-assessment-categories").then(response => {
        dispatchData({ type: 'addCategory', payload: response.data })
        setcategoryLoading(false)
      }).catch(error => {
        console.log("Cannot Get Data Form Server")
      })

    }
  }, [categoryLoading, data, dispatchData])



  return (
    <div className='h-full'>
      <SideBar />
      <div className="align-middle justify-center p-2 absolute pt-14 left-0 right-0 min-h-full bg--50 md:left-60">
        <Outlet />
      </div>
    </div>
  )
}

export default HomeScreen