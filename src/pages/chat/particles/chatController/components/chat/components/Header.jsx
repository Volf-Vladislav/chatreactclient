import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import EndCall from './../svg/EndCall'

import Status from './Status'
import Popup from './Popup'

function Header() {
    const dispatch = useDispatch()

    const [isOpen, setIsOpen] = useState(false)
    const status = useSelector(state => state.chatReducer.penPalStatus)
    const statusColor = status == 'disconnected' ? '#c65757' : '#805dab'

    function closeChat() {
        dispatch({ type: 'selectPage', payload: 1 })
    }

    return (
        <div className="chatHeader" style={{borderTopColor: statusColor}}>
            <div className="closeChat" onClick={() => closeChat()}>
                <EndCall color={"#c65757"}/>
            </div>

            <div className="status">
                <p className='name'>ANONYM</p>
                <Status />
            </div>

            <div className="menu clickable"
                style={isOpen ? { background: '#241e2a' } : {}}
                onClick={() => setIsOpen(!isOpen)}>

                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>

            {
                isOpen ? <Popup /> : <></>
            }
        </div>
    )
}

export default Header
