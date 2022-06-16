const initialState = {
    page: 1,
    isBan: false
}

export function pageReducer(state = initialState, action) {
    if (action.type == 'selectPage') {
        return { ...state, page: action.payload }
    }

    else if (action.type == 'setBan') {
        return { ...state, isBan: action.payload }
    }
    
    else return state
}