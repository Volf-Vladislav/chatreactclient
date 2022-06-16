import React from 'react'
import { useSelector } from 'react-redux'

function Advantage() {
    const translate = useSelector(state => state.translateReducer.translate.advantages)

    return (
        <div id="about" className="about-us section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 align-self-center">
                        <div className="services">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="item wow fadeIn animated animation3" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <div className="right-text">
                                            <h2>{translate.title}</h2>
                                            <p>{translate.innerTitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="item wow fadeIn animated animation3" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <div className="right-text">
                                            <p>{translate.text1}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="item wow fadeIn animated animation4" data-wow-duration="1s" data-wow-delay="0.7s">
                                        <div className="right-text">
                                            <p>{translate.text2}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="item wow fadeIn animated animation5" data-wow-duration="1s" data-wow-delay="0.9s">
                                        <div className="right-text">
                                            <p>{translate.text3}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="item wow fadeIn animated animation3" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <div className="right-text">
                                            <p>{translate.text4}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantage
