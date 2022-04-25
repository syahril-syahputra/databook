import React, { useState, useEffect } from 'react'
import * as FaIcons from "react-icons/fa";
import ModalWindow from '../components/ModalWindow'

const Detail = props => {
    const [visible, setvisible] = props.visible
    const [bookmarked, setbookmarked] = useState(false)
    useEffect(() => {

        if (visible) {

            if (localStorage.getItem("bookmark") === null) {
                localStorage.setItem('bookmark', JSON.stringify([]))
            }
            const storage = JSON.parse(localStorage.getItem("bookmark"));
            const data = storage.findIndex(x => x.id === props.data.id)
            if (data >= 0) {
                setbookmarked(true)
            } else {
                setbookmarked(false)
            }
            //eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }, [visible, props])

    const bookmark = () => {
        if (localStorage.getItem("bookmark") === null) {
            localStorage.setItem('bookmark', JSON.stringify([]))
        }
        const storage = JSON.parse(localStorage.getItem("bookmark"));
        const data = storage.findIndex(x => x.id === props.data.id)
        if (data >= 0) {
            storage.splice(data, 1)
            setbookmarked(false)
        } else {
            storage.push(props.data)
            setbookmarked(true)
        }
        localStorage.setItem('bookmark', JSON.stringify(storage))

    }
    return (

        <ModalWindow visible={[visible, setvisible]} width="w-1/3" bg="white" judul="Detail Book">
            {
                props.data.sections ?
                    <div className='justify-center items-center flex flex-col'>

                        <div className='flex flex-col md:flex-row items-center bg-gray-200 rounded-md overflow-hidden shadow-gray-300 shadow-md justify-center md:w-3/4 md:m-2'>

                            <img alt='' src={props.data.cover_url} className="h-56 object-contain" />
                            <div className="p-2 bg-gray-100 md:h-56 mt-5 md:mt-0 flex-1 flex  flex-col">
                                <span className='block text-gray-700 font-bold'>{props.data.title}</span>
                                <div className='flex-1 text-sm my-4'>{props.data.description}</div>
                                <label className='text-sm'><b>Authors</b> : {props.data.authors.join(", ")}</label>
                            </div>
                        </div>

                        <div>
                            {
                                props.data.sections.map((item, index) => {
                                    return <div key={index}>
                                        <b className='block mt-3 mb-1 text-gray-700'>{item.title}</b>
                                        <label className='text-sm text-gray-700'>{item.content}</label>
                                    </div>
                                })
                            }
                        </div>
                        <div className='flex justify-start w-full'>
                            <button onClick={bookmark} className='flex bg-gray-200 cursor-pointer hover:bg-gray-300 w-full md:w-min shadow-md p-2 justify-center mt-5 items-center rounded-md'>
                                <FaIcons.FaStar size={20} className={" mr-1 " + (bookmarked ? "text-yellow-500" : "text-gray-700")} /><label className='text-gray-700 cursor-pointer font-bold'>BookMark</label>
                            </button>
                        </div>
                    </div>
                    : <label>asdasd</label>
            }
        </ModalWindow>
    )
}

export default Detail