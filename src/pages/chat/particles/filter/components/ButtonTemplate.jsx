import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Buttontemplate(props) {
    const dispatch = useDispatch()

    const disabledColor = '#29252f'
    const activeColor = '#805dab'

    const userGender = useSelector(state => state.userReducer.userGender)
    const penPalgender = useSelector(state => state.userReducer.penPalGender)

    function changeGender(gender, genderType) {
        if (genderType == 'user') {
            setUserGender(gender)
        }
        else if (genderType == 'penpal') {
            setPenPalGender(gender)
        }
    }

    function setUserGender(gender) {
        dispatch({ type: 'changeUserGender', payload: gender })
    }

    function setPenPalGender(gender) {
        dispatch({ type: 'changePenPalGender', payload: gender })
    }

    function setColor(gender, type) {
        if (gender == userGender && type == 'user') {
            return activeColor
        }
        else if (gender == penPalgender && type == 'penpal') {
            return activeColor
        }
        else return disabledColor
    }

    return (
        <div className="button"
            style={{ background: setColor(props.gender, props.genderType) }}
            onClick={() => { changeGender(props.gender, props.genderType) }}>
                
            <p>{props.text}</p>
        </div>
    )
}

export default Buttontemplate
