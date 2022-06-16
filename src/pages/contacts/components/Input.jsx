import React from 'react'

function Input(props) {
    if (props.type == 'fullForm') {
        return (
            <div className="col-lg-12">
                <fieldset>
                    <textarea name="message" type="text" className="form-control" id="message" placeholder={props.label} required=""></textarea>
                </fieldset>
            </div>
        )
    }
    else return (
        <div className="col-lg-12">
            <fieldset>
                <input type="name" name="name" id="name" placeholder={props.label} autoComplete="on" required="" />
            </fieldset>
        </div>
    )
}

export default Input
