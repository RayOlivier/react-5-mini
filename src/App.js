import React, { Component } from "react"
import "./App.css"
import { Provider } from "react-redux" //Steven prefers to put provider in app.js over index.js

import store from "./store"
import Counter from "./Counter"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  }
}

export default App
