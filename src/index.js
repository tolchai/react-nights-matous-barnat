import * as serviceWorker from './serviceWorker'

import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

const render = Component => {
  ReactDOM.render(
    <App>
      <Component />
    </App>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
