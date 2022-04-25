import React from 'react'
import { Dots } from "react-activity";

import "react-activity/dist/Dots.css";
import ModalCover from './ModalCover'

const Loading = props => {
    const [visible, setVisible] = props.visible
    return (
        <ModalCover visible={visible} width="60">
            <div className="align-middle justify-center text-center">
                <div className="p-1">
                    <Dots color="gray" />
                </div>
                <span className="text-gray-900 font-bold p-4">Mohon Tunggu...</span>
            </div>
        </ModalCover>
    )
}

export default Loading
