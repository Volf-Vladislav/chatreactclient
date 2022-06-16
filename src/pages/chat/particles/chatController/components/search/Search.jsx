import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from './../../../../templates/Header'

function Search() {
    const dispatch = useDispatch()
    const translate = useSelector(state => state.translateReducer.translate.chatBlock)

    function back() {
        dispatch({ type: 'selectPage', payload: 1 })
    }

    return (
        <div>
            <Header />
            <div className='searchContainer'>
                <div className='loader'>
                    <div className="lds-facebook">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div className="buttonConatainer">
                    <div className="button" onClick={() => back()}>
                        <p>{translate.stop}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
