import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import Header from './components/Header'
import Popup from './components/Popup'
import Input from './components/Input'
import Messages from './components/Messages'

function Chat(props) {
    const messages = useSelector(state => state.chatReducer.messages)
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [messages])

    return (
        <div className="chatContainer">
            <Header />
            <div className='messagesContainer'>
                <Messages />
                <div ref={messagesEndRef}/>
            </div>
            <Input socket={props.socket} />
        </div>
    )
}

export default Chat
