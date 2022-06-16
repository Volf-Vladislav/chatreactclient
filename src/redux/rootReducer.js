import { combineReducers } from 'redux'

import { translateReducer } from './translateReducer'
import { userReducer } from './userReducer'
import { pageReducer } from './pageReducer'
import { chatReducer } from './chatReducer'

export default combineReducers({
    translateReducer,
    userReducer,
    pageReducer,
    chatReducer
})