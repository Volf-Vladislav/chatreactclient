import React from 'react'
import { useSelector } from 'react-redux'

import ButtonTemplate from './ButtonTemplate'

function Card(props) {
    const translate = useSelector(state => state.translateReducer.translate.chatBlock)

    return (
        <div className="block">
            <p>{props.text}</p>
            
            <div className="buttons">
                <ButtonTemplate text={translate.any} gender='any' genderType={props.genderType} />
                <ButtonTemplate text={translate.male} gender='male' genderType={props.genderType} />
                <ButtonTemplate text={translate.female} gender='female' genderType={props.genderType} />
            </div>
        </div>
    )
}

export default Card