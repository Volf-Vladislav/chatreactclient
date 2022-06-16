import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import Smile from './../svg/Smile'
import Send from './../svg/Send'
import Emoji from './Emoji'

import { message } from './../../../helpers/message'

function Input(props) {
    const dispatch = useDispatch()
    const textInput = useRef()
    const [value, setValue] = useState('')
    const [color, setColor] = useState('#ad8cd578')
    const [emojiColor, setEmojiColor] = useState('#AD8CD5')
    const [isOpen, setIsOpen] = useState(false)

    const onEmojiClick = (event, emojiObject) => {
        setValue(value + emojiObject.emoji)
    }

    function onKeyDown(event) {
        if (event.key === 'Enter') sendMessage()
    }

    function sendMessage() {
        if (value) {
            if (props.socket.current.readyState == 1) {
                props.socket.current.send(message({
                    data: value,
                }, 'message'))
                props.socket.current.send(message({ status: 'endPrint' }, 'status'))
    
                dispatch({ type: 'changeMessages', payload: { position: 'right', id: 'userID', message: value } })
                setValue('')
            }
        }
    }

    useEffect(() => {
        if (value) setColor('#AD8CD5')
        else setColor('#ad8cd578')

        if(isOpen) setEmojiColor('#ad8cd578')
        else setEmojiColor('#AD8CD5')

        textInput.current.focus()
    })

    return (
        <div className="chatInput">

            <Emoji onEmojiClick={onEmojiClick} isOpen={isOpen} />

            <div className="chatControllers">
                <a className='pointer' onClick={() => setIsOpen(!isOpen)}>
                    <Smile color={emojiColor}/>
                </a>

                <input
                    placeholder="Message"
                    autoCapitalize="sentences"
                    autoComplete="on"
                    autoCorrect="on" dir="auto"
                    spellCheck="true"
                    value={value}
                    onKeyDown={(e) => onKeyDown(e)}
                    ref={textInput}
                    onChange={e => {
                        setValue(e.target.value)
                        if (props.socket.current.readyState == 1) {
                            props.socket.current.send(message({ status: 'print' }, 'status'))
                        }
                    }}
                />
            </div>

            <div className='pointer' onClick={() => sendMessage()}>
                <Send color={color} />
            </div>
        </div>
    )
}

export default Input
