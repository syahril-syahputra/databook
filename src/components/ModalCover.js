import React from 'react'

const ModalCover = props => {
    
    return (
        props.visible ?
            <div
                className="justify-center bg-black bg-opacity-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className={"relative w-full p-3 my-6 mx-auto max-w-3xl md:" + props.width ? props.width : "w-min"}>
                    <div className={"p-2 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-"+ (props.bg ? props.bg : "white") +" outline-none focus:outline-none"}>
                        <div className="items-start justify-between border-b border-solid border-blueGray-200 rounded-t">
                            {props.judul ?
                                <h3 className="block border-b-2 mb-2 py-1 text-gray-700 font-bold border-gray-700 border-solid">{props.judul}</h3>
                                : null
                            }

                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
            : 
            null
    )
}

export default ModalCover
