import {combineReducers} from "redux";
import global from './global/globalReducer.js';
import room from './room/roomReducer';

export default combineReducers({
    global,
    room
})

