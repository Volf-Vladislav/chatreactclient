import React from 'react'

import { useSelector } from 'react-redux'

import Filter from './particles/filter/Filter'
import ChatController from './particles/chatController/ChatController'
import Ban from './particles/ban/Ban'

function Navigation() {
    const page = useSelector(state => state.pageReducer.page)
    const isBan = useSelector(state => state.pageReducer.isBan)

    if (page == 1 && !isBan) {
        return (
            <Filter />
        )
    }
    else if (page == 2 && !isBan) {
        return (
            <ChatController />
        )
    }
    else return (
        <Ban />
    )
}

export default Navigation
