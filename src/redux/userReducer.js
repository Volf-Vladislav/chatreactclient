const initialState = {
    userGender: 'any',
    penPalGender: 'any',
    userID: Math.random() * 10000,
    penPalStatus: ''
}

export function userReducer(state = initialState, action) {
    if (action.type == 'changeUserGender') {
        return { ...state, userGender: action.payload }
    }
    else if (action.type == 'changePenPalGender') {
        return { ...state, penPalGender: action.payload }
    }
    else if (action.type == 'changePenPalStatus') {
        return { ...state, penPalStatus: action.payload }
    }
    else if (action.type == 'setID') {
        return { ...state, penPalID: action.payload }
    }
    
    else return state
}