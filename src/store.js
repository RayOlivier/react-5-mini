import { createStore, combineReducers, applyMiddleware, compose } from "redux" //combine allows us to use multiple reducers
import promiseMiddleware from "redux-promise-middleware" //works similarly to body-parser...

import counter from "./ducks/counter"
import userReducer from "./ducks/userReducer"

// const store = createStore(counter)

const combinedReducers = combineReducers({
  user: userReducer,
  counter //shorter way of putting counter: counter
  //these would be accessed by another layer on props (everything would be under this.props.counter instead of just this.props)
})
//separation of concerns

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancers = composeEnhancers(applyMiddleware(promiseMiddleware())) //middleware gives more refined control over async requests.... allows us to use axios

export default createStore(combinedReducers, enhancers)
