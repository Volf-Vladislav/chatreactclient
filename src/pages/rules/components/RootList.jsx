import React from 'react'
import { useSelector } from 'react-redux'

function RootList() {
    const translate = useSelector(state => state.translateReducer.translate.rulesBlock)

    return (
        <div id="services" className="our-services section our-pravila">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 wow fadeInRight animated animation6" data-wow-duration="1s" data-wow-delay="0.2s">
                        <div className="section-heading">
                            <p className="text-left" style={{ whiteSpace: 'pre-wrap' }}>{translate.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RootList
