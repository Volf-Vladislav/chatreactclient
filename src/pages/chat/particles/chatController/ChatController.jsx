import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Search from './components/search/Search'
import Chat from './components/chat/Chat'

import { socketServer } from '../../../../api/socketServer'

import { onMessage, openChat } from './helpers/socketEvents'
import { exitChat } from './helpers/exitChat'

function ChatController() {
    const socket = useRef()
    const dispatch = useDispatch()

    const status = useSelector(state => state.chatReducer.penPalStatus)
    const user = useSelector(state => state.userReducer)

    useEffect(() => {
        socket.current = new WebSocket(socketServer)

        socket.current.onopen = () => {
            openChat(socket, user)
        }

        socket.current.onmessage = (event) => {
            dispatch(onMessage(event))
        }

        socket.current.onerror = (err) => {
            exitChat(socket.current.readyState, socket)
            console.log(err)
        }

        socket.current.onclose = () => {
            exitChat(socket.current.readyState, socket)
        }

        return () => {
            dispatch({ type: 'exit' })
            exitChat(socket.current.readyState, socket)
        }
    }, [])

    if (status == 'disconnected' || status == 'reported') {
        exitChat(socket.current.readyState, socket)
    }

    if (status == 'notFound') {
        return <Search />
    }
    else {
        return <Chat socket={socket} />
    }
}

export default ChatController
