import React from 'react'
import { useSelector } from 'react-redux'

function Status() {
    const status = useSelector(state => state.chatReducer.penPalStatus)

    if (status == 'disconnected' || status == 'notFound') {
        return (
            <p className='text disconnected neonRed'>Disconnected</p>
        )
    }
    else if (status == 'reported') {
        return (
            <p className='text disconnected'>Reported</p>
        )
    }
    else if (status == 'print') {
        return (
            <p className='text print'>•••</p>
        )
    }

    else return (
        <p className='text online'>Online</p>
    )
}

export default Status
