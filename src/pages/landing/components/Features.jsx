import React from 'react'
import { useSelector } from 'react-redux'

function Features() {
    const translate = useSelector(state => state.translateReducer.translate.features)

    return (
        <div id="services" className="our-services section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 wow fadeInRight animated animation6" data-wow-duration="1s" data-wow-delay="0.2s">
                        <div className="section-heading">
                            <h2>{translate.title}</h2>
                            <p>{translate.innerTitle}</p>
                            <p>{translate.text1}</p>
                            <p>{translate.text2}</p>
                            <p>{translate.text3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
