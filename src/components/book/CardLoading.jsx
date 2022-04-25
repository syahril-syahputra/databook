import React from 'react'

import Skeleton from 'react-loading-skeleton'
const CardLoading = () => {
    return (
        <div className=' flex  bg-white m-2 border-gray-200  border hover:bg-gray-200 shadow-md shadow-gray-400 rounded-md overflow-hidden'>
            <Skeleton height='100%' width={100} />
            <div className=' h-44 flex-1  p-2 flex flex-col'>
                <Skeleton height={30} width='100%' />
                <p className='flex-1'>
                    <Skeleton height={10} width='100%' count={3} />
                </p>
                <Skeleton height={30} width='100%' />
            </div>
        </div>
    )
}

export default CardLoading