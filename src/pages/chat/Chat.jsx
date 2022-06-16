import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import './assets/css/main.scss'
import Navigation from './Navigation'

function Chat() {
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch({ type: 'selectPage', payload: 1 })
        }
    }, [])

    return (
        <div className='background'>
            <Navigation />
        </div>
    )
}

export default Chat
