import React from 'react'
import { useState, useEffect } from 'react'
import Select from 'react-select'

import { Link } from "react-router-dom"

import { useSelector, useDispatch } from 'react-redux'

function Header() {
    const dispatch = useDispatch()

    const short = useSelector(state => state.translateReducer.short)
    const translate = useSelector(state => state.translateReducer.translate)
    const languages = useSelector(state => state.translateReducer.languages)

    useEffect(() => {
        document.title = translate.chatTitle
        document.querySelector('meta[name="description"]').content = translate.description
        document.querySelector('meta[name="keywords"]').content = translate.keywords
    }, [translate])

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

    return (
        <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <div className="logo blockTitle">
                                <Link to="/"><h4>Anonim<span>Chat</span></h4></Link>
                            </div>
                            <ul className="nav">
                                <li style={{ marginTop: 2 }}>
                                    <Select
                                        onChange={changeLanguage}
                                        value={getValue()}
                                        options={option}
                                    />
                                </li>
                                <li><p><Link to="/rules">{translate.header.rules}</Link></p></li>
                                <li><p><Link to="/contact">{translate.header.contacts}</Link></p></li>
                                <li><div className="main-red-button"><Link to="/chat">{translate.header.chat}</Link></div></li>
                            </ul>
                            <a className='menu-trigger'><span>Меню</span></a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
