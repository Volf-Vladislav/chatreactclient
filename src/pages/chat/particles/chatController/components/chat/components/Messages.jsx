import React from 'react'
import { useSelector } from 'react-redux'

function Messages() {
    const messages = useSelector(state => state.chatReducer.messages)

    if (messages != null) {
        return (
            messages.map(element => {
                if (element.message == false) {
                    return <div key={Math.random()}></div>
                }
                else if (element.position == 'right') {
                    return (
                        <div className="message right" key={Math.random()}>
                            <div>{element.message}</div>
                        </div>
                    )
                }
                else {
                    return (
                        <div className="message left" key={Math.random()}>
                            <div>{element.message}</div>
                        </div>
                    )
                }
            })
        )
    }
    else return <></>
}

export default Messages
