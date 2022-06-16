import React from 'react'
import { useSelector } from 'react-redux'

import img from "../../../assets/images/contact-decoration.png"
import Input from './Input'

function ContactForm() {
    const translate = useSelector(state => state.translateReducer.translate.contactsBlock)

    return (
        <div className="contact-us section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center wow fadeInLeft animated animation6" data-wow-duration="0.5s" data-wow-delay="0.25s">
                        <div className="section-heading">
                            <h2>{translate.contact}</h2>
                            <p>{translate.text}</p>
                            <div className="phone-info">
                                <h4>{translate.email} <span> <a href="malito:info@anonim-chat.com">info@anonim-chat.com</a></span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInRight animated animation6" data-wow-duration="0.5s" data-wow-delay="0.25s" >
                        <form id="contact" className="form" name="form">
                            <div className="row">
                                <Input label={translate.name} />
                                <Input label={translate.purpose} />
                                <Input label={translate.message} type={'fullForm'} />
                                <div className="col-lg-12">
                                    <fieldset>
                                        <button type="submit" id="form-submit" className="main-button ">{translate.send}</button>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="contact-dec">
                                <img src={img} alt="" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
