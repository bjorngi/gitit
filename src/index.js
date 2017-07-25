// Import index.html to project
require('file-loader?name=index.html!assets/index.html');

// Import styles to project
import 'styles/reset.css'
import 'styles/fonts.css'
import 'styles/main.css'

// React
import React from 'react'
import ReactDOM from 'react-dom';

// Redux
import configureStore from './configureStore'
import { Provider } from 'react-redux'

// Initial state store
const store = configureStore()

import App from './app'

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'))
