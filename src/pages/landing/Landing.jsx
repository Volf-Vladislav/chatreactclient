import React from 'react'

import Footer from './../../templates/Footer'
import Header from './../../templates/Header'
import InnerHeader from './components/InnerHeader'
import Features from './components/Features'
import Advantage from './components/Advantage'

import style from "../../assets/css/style.css"
import animated from "../../assets/css/animated.css"
import fontawesome from "../../assets/css/fontawesome.css"
import landing from "../../assets/css/landing.css"

function Landing() {
    return (
        <div className={[style, animated, fontawesome, landing]}>
            <Header />
            <InnerHeader />
            <Advantage />
            <Features />
            <Footer />
        </div>
    )
}

export default Landing
