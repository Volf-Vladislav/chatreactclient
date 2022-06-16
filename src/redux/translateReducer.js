const initialState = {
    short: localStorage.getItem('lang') || navigator.language,
    languages: [],
    translate: {
        title: 'loading...',
        name: 'loading...',
        short: 'loading...',
        keywords: 'loading...',
        description: 'loading...',
        chatTitle: 'loading...',
        header: {
            chat: 'loading...',
            rules: 'loading...',
            contacts: 'loading...'
        },
        innerHeader: {
            title: 'loading...',
            content: 'loading...',
            button: 'loading...'
        },
        advantages: {
            title: 'loading...',
            innerTitle: 'loading...',
            text1: 'loading...',
            text2: 'loading...',
            text3: 'loading...',
            text4: 'loading...'
        },
        features: {
            title: 'loading...',
            innerTitle: 'loading...',
            text1: 'loading...',
            text2: 'loading...',
            text3: 'loading...',
        },
        contactsBlock: {
            contact: 'loading...',
            text: 'loading...',
            email: 'loading...',
            name: 'loading...',
            purpose: 'loading...',
            message: 'loading...',
            send: 'loading...',
        },
        rulesBlock: {
            content: 'loading...'
        },
        chatBlock: {
            exit: 'loading...',
            userGender: 'loading...',
            penPalGender: 'loading...',
            any: 'loading...',
            male: 'loading...',
            female: 'loading...',
            back: 'loading...',
            search: 'loading...',
            stop: 'loading...',
            endCall: 'loading...',
            nextChat: 'loading...',
            report: 'loading...',
        }
    }
}

export function translateReducer(state = initialState, action) {
    if (action.type == 'setLanguages') {
        return { ...state, languages: action.payload }
    }
    else if (action.type == 'setTranslate') {
        return { ...state, translate: action.payload }
    }
    else if (action.type == 'setLanguage') {
        return { ...state, short: action.payload }
    }

    else return state
}