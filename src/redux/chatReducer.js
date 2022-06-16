const initialState = {
    messages: [],
    penPalStatus: 'notFound',
    penPalID: '',
}

export function chatReducer(state = initialState, action) {
    if (action.type == 'changePenPalStatus') {
        return { ...state, penPalStatus: action.payload.data, penPalID: action.payload.id }
    }
    else if (action.type == 'changeMessages') {
        return { ...state, messages: [...state.messages, action.payload] }
    }
    else if (action.type == 'exit') {
        return { ...state, messages: [], penPalStatus: 'notFound', penPalID: '' }
    }

    else return state
}