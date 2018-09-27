import axios from "axios"
const GET_PEOPLE = "GET_PEOPLE"

export function getPeople() {
  return {
    type: GET_PEOPLE,
    payload: axios.get("https://swapi.co/api/people") //don't have to use then or catch, the middleware does it for you... it calls .then, takes in the response and returns it
    //for every one action creator with a promise there are three possible
  }
}

const initialState = {
  user: {},
  people: [],
  isLoading: false
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    //   case GET_PEOPLE doesn't exist bc it returns a promise. it will never fire.
    case `${GET_PEOPLE}_PENDING`: //this is as soon as your action starts
      return {
        ...state,
        isLoading: true //this can be used for conditional rendering to show the user that it's loading
      }
    case `${GET_PEOPLE}_FULFILLED`: //this is like then
      return {
        ...state,
        isLoading: false,
        people: action.payload.data.results //this will vary... data.results is from swapi
      }
    case `${GET_PEOPLE}_REJECTED`: //this is like catch
      return {
        ...state,
        isLoading: false,
        errMessage: action.payload.message
      }
    default:
      return state
  }
}
