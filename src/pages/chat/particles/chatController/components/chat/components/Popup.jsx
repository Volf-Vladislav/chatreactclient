import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import EndCall from './../svg/EndCall'
import NextArrow from './../svg/NextArrow'
import Info from './../svg/Info'

function Popup() {
    const dispatch = useDispatch()
    const translate = useSelector(state => state.translateReducer.translate.chatBlock)

    function report() {
        dispatch({ type: 'changePenPalStatus', payload: { data: 'reported' } })
    }

    function exit() {
        dispatch({ type: 'selectPage', payload: 1 })
    }

    function nextChat() {
        dispatch({ type: 'selectPage', payload: 1 })
        setTimeout(() => {
            dispatch({ type: 'selectPage', payload: 2 })
        }, 0)
    }

    return (
        <div className="chatPopup">
            <div onClick={() => exit()}>
                <EndCall color={'#ad8cd5'} />
                <p>{translate.endCall}</p>
            </div>
            <div onClick={() => nextChat()}>
                <NextArrow color={'#ad8cd5'} />
                <p>{translate.nextChat}</p>
            </div>
            <div onClick={() => report()}>
                <Info color={'#ad8cd5'} />
                <p>{translate.report}</p>
            </div>
        </div>
    )
}

export default Popup
