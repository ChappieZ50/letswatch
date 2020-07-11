import {combineReducers} from "redux";
import global from './global/globalReducer.js';
import room from './room/roomReducer';
import video from './room/videoReducer';

export default combineReducers({
    global,
    room,
    video
})

