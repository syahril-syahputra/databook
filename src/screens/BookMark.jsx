
import React, { useEffect, useState } from 'react'

import * as FaIcons from "react-icons/fa";
import Card from '../components/book/Card'

import "react-activity/dist/Dots.css";

import Detail from '../Modal/Detail'






const BookMark = props => {
    // const [data, dispatchData] = useContext(dataContext)

    const [dataBook, setdataBook] = useState([])


    useEffect(() => {

        setdataBook(JSON.parse(localStorage.getItem("bookmark")))
    }, [])







    const [detailVisible, setdetailVisible] = useState(false)
    const [selectedBook, setselectedBook] = useState({})
    const callBack = data => {
        setselectedBook(data)
        setdetailVisible(true)
    }


    const [searchText, setsearchText] = useState("")
    const filterData = () => {
        return dataBook.filter(item => {
            return item.title.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
                item.authors.some(x => x.toLowerCase().search(searchText.toLowerCase()) !== -1)
        })
    }

    return (
        <div className=''>
            <Detail visible={[detailVisible, setdetailVisible]} data={selectedBook} />
            <div>
                <div className='flex p-3 items-center border rounded-lg border-gray-300'>
                    <FaIcons.FaSearch className='mr-2' size={20} color="#AAAAAA" />

                    <input className=' flex-1 outline-none text-gray-600' type="text" value={searchText} placeholder='Search' onChange={e => setsearchText(e.target.value)} />

                </div>
                <div
                    className='grid  grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  '
                >
                    {filterData().map((item, index) => {
                        return <Card search={searchText} callBack={callBack} key={index} item={item} />
                    })
                    }

                </div>

            </div>
        </div>
    )
}

export default BookMark