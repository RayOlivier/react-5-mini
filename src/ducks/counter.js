const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const UNDO = "UNDO"
const REDO = "REDO"

export function increment(amt) {
  return {
    //ALWAYS return an object because actions are objects
    type: INCREMENT,
    payload: amt
  }
}

export function decrement(amt) {
  return {
    type: DECREMENT,
    payload: amt
  }
}

export function undo() {
  return {
    type: UNDO
  }
}

export function redo() {
  return {
    type: REDO
  }
}

const initialState = {
  currentValue: 0,
  previousValues: [],
  futureValues: []
}

export default function counter(state = initialState, action) {
  //if state is falsy, it will use initialState... will only happen the first time
  switch (action.type) {
    case INCREMENT:
      state.previousValues.push(state.currentValue)
      return {
        ...state,

        currentValue: state.currentValue + action.payload
      }
    case DECREMENT:
      state.previousValues.push(state.currentValue)
      return {
        ...state,
        currentValue: state.currentValue - action.payload
      }

    case UNDO:
      let unPop = state.previousValues.pop()
      state.futureValues.push(unPop)

      return {
        ...state,
        currentValue: unPop
      }

    case REDO:
      let rePop = state.futureValues.pop()
      state.previousValues.push(rePop)
      return {
        ...state,
        currentValue: rePop
      }
    default:
      return state
  }
}
