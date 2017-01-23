const initialState = {
    notes: [],
    fetching: false,
    saving: false,
    error: null,
}

export default function reducer(state=initialState , action) {    
    switch (action.type) {
        case "ADD_NOTE": {
          Object.assign({},state,state.saving=true);
          break;
        }

        case "FETCH_NOTES": {
          action.payload.map((note) => {
              state.notes = state.notes.concat(note._source.Note);
          });          
          break;
        }
  }
    return state;
}
