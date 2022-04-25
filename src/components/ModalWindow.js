import React from 'react'
const ModalWindow = props => {
    const [visible, setVisible] = props.visible
    return (
        visible ?
            <div
                className="justify-center bg-black bg-opacity-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
            >
                <div className={"relative py-7 w-full mx-5 md:w-3/4 h-full  md:h-3/4"}>
                    <div className="flex-col h-full flex rounded-lg overflow-hidden">
                        <div className='bg-gray-700 flex justify-between items-center'>
                            <h3 className="px-2 py-2 text-white font-bold border-gray-700 text-sm">{props.judul}</h3>
                            <span onClick={() => { setVisible(false) }} className='mr-3 font-bold text-gray-200 hover:text-white cursor-pointer'>X</span>
                        </div>
                        <div className='flex-1 p-5 bg-white overflow-y-scroll'>

                            
                                {props.children}
                        </div>
                    </div>


                </div>
            </div>
            :
            null
    )
}

export default ModalWindow
