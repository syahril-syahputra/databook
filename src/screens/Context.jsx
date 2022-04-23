import React, { useState } from 'react'

const Context = props => {

    const isLoading = props.loading
    return (
        <div>
            <div className="bg-white p-2  shadow-md">
                {
                    props.children


                }
            </div>
        </div>
    )
}

export default Context
