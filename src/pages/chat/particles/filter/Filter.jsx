import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import Header from '../../templates/Header'
import Card from './components/Card'

function Filter() {
    const dispatch = useDispatch()
    const translate = useSelector(state => state.translateReducer.translate.chatBlock)


    function back() { window.history.back() }

    function startChat() {
        dispatch({ type: 'selectPage', payload: 2 })
    }

    return (
        <div>
            <Header />
            
            <div className="filterContainer">
                <Card text={translate.userGender} genderType='user' />
                <Card text={translate.penPalGender} genderType='penpal' />

                <div className="controllers">
                    <div className="findButton back" onClick={() => back()}>
                        <p>{translate.back}</p>
                    </div>

                    <div className="findButton" onClick={() => startChat()}>
                        <p>{translate.search}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter
