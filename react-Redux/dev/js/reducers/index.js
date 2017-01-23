import { combineReducers } from "redux"
import notes from './noteReducer'

const allReducers = combineReducers({
    notes : notes
});

export default allReducers;
