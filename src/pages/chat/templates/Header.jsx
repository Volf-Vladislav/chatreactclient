import React, { useState } from 'react'
import Select from 'react-select'

import { Link } from "react-router-dom"

import { useSelector, useDispatch } from 'react-redux'

function Header() {
    const dispatch = useDispatch()

    const short = useSelector(state => state.translateReducer.short)
    const languages = useSelector(state => state.translateReducer.languages)
    const translate = useSelector(state => state.translateReducer.translate.chatBlock)

    const [value, setValue] = useState(short)

    function changeLanguage(e) {
        setValue(e.value)
        localStorage.setItem('lang', e.value)
        dispatch({ type: 'setLanguage', payload: e.value })
    }

    const option = languages.map(element => {
        return {
            value: element.short,
            label: element.name
        }
    })

    function getValue() {
        return value ? option.find(x => x.value == value) : ''
    }

    const colourStyles = {
        control: styles => ({
            ...styles,
            backgroundColor: '0f0f0f',
            border: '1px solid #ffffffb3',
        }),
        option: (styles) => {
            return {
                ...styles,
                backgroundColor: '#0f0f0f',
                border: '1px solid #0000004d',
                color: '#ffffffb3',
            }
        },
    }

    return (
        <div className='header'>
            <div className="logo">
                <Link to="/"><h4>Anonim<span>Chat</span></h4></Link>
            </div>

            <div className="buttons">
                <Select
                    onChange={changeLanguage}
                    styles={colourStyles}
                    value={getValue()}
                    options={option}
                />

                <p>{translate.exit}</p>
            </div>
        </div>
    )
}

export default Header
