import axios from "axios";

export function addNote(text) {
  return function(dispatch) {
    axios.post("http://localhost:3000/addNote",{
        text: text
    })
      .then((response) => {
        dispatch({type: "ADD_NOTE", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "ADD_NOTES_REJECTED", payload: err})
      })
  }
}

export function fetchNote() {
  return function(dispatch) {
    axios.get("http://localhost:3000/notes")
      .then((response) => {
        dispatch({type: "FETCH_NOTES", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
      })
  }
}
