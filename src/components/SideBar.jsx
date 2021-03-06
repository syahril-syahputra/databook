import React, { useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { dataContext } from '../App';
const SideBar = () => {

    const [data] = useContext(dataContext)
    const location = useLocation()
    const [selected, setselected] = useState(location.pathname.split("/")[1])
    const [sideBar, setsideBar] = useState(0)

    const showSidebar = () => {
        setsideBar(!sideBar)
    }




    useEffect(() => {
        if (location.pathname.split("/")[1] === "bookmark") {
            setselected(0)
        } else {

            location.pathname.split("/")[1] === "" ? setselected(1) : setselected(location.pathname.split("/")[1])
        }


    }, [location.pathname])



    // props.match.params
    return (
        <>
            <div className="w-full items-center flex justify-between fixed left-0 right-0 top-0 z-50 bg-gray-700 border-gray-200 border-double border-b-2 flex-shrink shadow-md p-2">
                <Link to="#" className="visible md:hidden">
                    <FaIcons.FaBars size={20} color="#FFFFFF" onClick={showSidebar} />
                </Link>
                <label className='text-gray-100 invisible font-bold md:visible'>Data Book</label>

            </div>
            <nav className={"fixed z-10 md:z-40 md:pt-16 left-0 pt-2 border-r-2 border-gray-400 shadow-md shadow-gray-400 top-12 md:top-0 md:bottom-0 bg-gray-100 p-5 w-full md:w-56 " + (sideBar ? "visible" : "invisible") + " md:visible"}>
                <ul className="nav-menu-items">
                    <Link key={0} to={"bookmark"} onClick={() => { setsideBar(false); setselected(0) }} className="  w-full flex items-center ">
                        <li key={0} className={"active:bg-gray-300 cursor-pointer hover:rounded-md flex items-center hover:bg-gray-200 hover:border-red-300  w-full py-2 px-2 mb-2 align-middle " + (0 === parseInt(selected) ? "bg-gray-500 rounded-md" : "")}>
                            <span><FaIcons.FaStar size={20} className="text-yellow-500" /></span>
                            <span className={"font-serif text-xs ml-2 font-bold " + (0 === parseInt(selected) ? "text-white" : "text-gray-700 ")}>BookMark</span>
                        </li>
                    </Link>
                    <hr className='mb-2 border-gray-300' />
                    {
                        data.category.length === 0 ?

                            <SkeletonTheme height={30} baseColor="#CCCCCC" highlightColor="#DDDDDD">
                                <p className='pb-10'>
                                    <Skeleton count={6} />
                                </p>
                            </SkeletonTheme>
                            :
                            data.category.map((item, index) => {
                                const itempath = "/" + item.id
                                return <Link key={index} to={itempath} onClick={() => { setsideBar(false); setselected(item.id) }} className="  w-full flex items-center ">
                                    <li key={index} className={"active:bg-gray-300 hover:rounded-md flex items-center hover:bg-gray-200 hover:border-red-300  w-full py-2 px-2 mb-2 align-middle " + (parseInt(item.id) === parseInt(selected) ? "bg-gray-500 rounded-md" : "")}>
                                        <span><FaIcons.FaCaretRight size={20} color="#AAAAAA" onClick={showSidebar} /></span>
                                        <span className={"font-serif text-xs ml-2 font-bold " + (parseInt(item.id) === parseInt(selected) ? "text-white" : "text-gray-700 ")}>{item.name}</span>
                                    </li>
                                </Link>
                            })
                    }
                </ul>
            </nav>
        </>
    )
}

export default SideBar
