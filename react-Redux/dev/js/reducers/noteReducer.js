const initialState = {
    notes: [],
    fetching: false,
    saving: false,
    error: null,
}

export default function reducer(state=initialState , action) {    
    switch (action.type) {
        case "ADD_NOTE": {
          return Object.assign({},state,state.saving=true);
          break;
        }

        case "FETCH_NOTES": {
          var newNote = []
          action.payload.map((note) => {
              newNote.push(note._source.Note)    ;
          }); 
          
          return Object.assign({},state,{notes:newNote,saving:false});                   
          break;
        }
  }
    return state;
}
