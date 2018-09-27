import React, { Component } from "react"
import { connect } from "react-redux"

import { increment, decrement, undo, redo } from "./ducks/counter"
import { getPeople } from "./ducks/userReducer"

class Counter extends Component {
  // componentDidMount() {
  //   this.props.getPeople() //this is all you need to do bc redux is handling the axios calls
  // }

  render() {
    console.log(this.props)
    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{this.props.currentValue}</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={() => this.props.increment(1)}
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={() => this.props.increment(5)}
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={() => this.props.decrement(1)}
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={() => this.props.decrement(5)}
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              // disabled={true}
              onClick={() => this.props.undo()}
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              // disabled={true}
              onClick={() => this.props.redo()}
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>{JSON.stringify(this.props, null, 2)}</pre>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.counter, //this flattens both reducers into one so you don't have to type this.props.counter.key and this.props.user.key
  ...state.user //this isn't default bc duplicate values will be overwritten by whatever value is later in your code
}) //this tells the store what data we want from the store... in this case we want all of state

export default connect(
  mapStateToProps,
  { increment, decrement, undo, redo, getPeople } //you pass in your action creators as object values. this puts the action creators on props. also this is object shorthand for increment:increment
)(Counter) //connect will return a function that Counter will be a param of
