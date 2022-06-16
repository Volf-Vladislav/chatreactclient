import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Navigation from './Navigation'
import rootReducer from './redux/rootReducer'

import './assets/css/GLOBAL.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={createStore(rootReducer)}>
    <Navigation />
  </Provider>
)
