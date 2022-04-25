import React, { useEffect, useState } from 'react'

import * as FaIcons from "react-icons/fa";
const Card = props => {


    const [bookmarked, setbookmarked] = useState(false)
    useEffect(() => {
        if (localStorage.getItem("bookmark") === null) {
            localStorage.setItem('bookmark', JSON.stringify([]))
        }
        const storage = JSON.parse(localStorage.getItem("bookmark"));
        const data = storage.findIndex(x => x.id === props.item.id)
        if (data >= 0) {
            setbookmarked(true)
        } else {
            setbookmarked(false)
        }
    }, [localStorage.getItem('bookmark')])


    return (
        // <div onClick={() => props.callBack(props.item)} className='flex flex-row flex-grow 2xl:max-w-xs  cursor-pointer w-full md:w-72  bg-white m-2 border-gray-200 hover:shadow-gray-200 hover:border-gray-400 border hover:bg-gray-200 shadow-md shadow-gray-400 rounded-md overflow-hidden'>
        //     <img src={props.item.cover_url} className="object-contain bg-red-500 h-44 " />
        //     <div className=' h-44 flex-1  p-2 flex flex-col'>

        //         <span className='font-bold  w-full text-gray-700 text-sm'>{props.item.title}</span>
        //         <div className="flex-1">

        //             <p className=' line-clamp-3 text-sm text-gray-700'>{props.item.description}</p>

        //         </div>
        //         <div>
        //             {
        //                 bookmarked ?

        //                     <div className='flex items-center justify-start'>
        //                         <FaIcons.FaStar size={20} className={" mr-1 text-yellow-500"} />
        //                     </div> :
        //                     null
        //             }
        //             <label className='text-gray-700 font-bold text-xs'>{props.item.authors.join(", ")}</label>
        //         </div>
        //     </div>
        // </div>
        <div onClick={() => props.callBack(props.item)} className=' flex cursor-pointer   bg-white m-2 border-gray-200 hover:shadow-gray-200 hover:border-gray-400 border hover:bg-gray-200 shadow-md shadow-gray-400 rounded-md overflow-hidden'>
            <img src={props.item.cover_url} className="object-contain bg-red-500 h-44 " />
            <div className=' h-44 flex-1  p-2 flex flex-col'>

                <span className='font-bold  w-full text-gray-700 text-sm'>{props.item.title}</span>
                <div className="flex-1">

                    <p className=' line-clamp-3 text-sm text-gray-700'>{props.item.description}</p>

                </div>
                <div>
                    {
                        bookmarked ?

                            <div className='flex items-center justify-start'>
                                <FaIcons.FaStar size={20} className={" mr-1 text-yellow-500"} />
                            </div> :
                            null
                    }
                    <label className='text-gray-700 font-bold text-xs'>{props.item.authors ? props.item.authors.join(", ") : null}</label>
                </div>
            </div>
        </div>
    )
}

export default Card
