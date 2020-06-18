import axios from 'axios';

import {CREATE_ROOM} from "../actionTypes";

const API = 'localhost:8000/create-room';


export const createRoom = state => dispatch => {
    axios.post(API, state)
        .then(response => dispatch(success(response.data)))
        .catch(response => dispatch(failed(response.response.data)))
};

export const success = (data) => {
    return {
        type: CREATE_ROOM,
        payload: {
            data
        }
    }
};

export const failed = (errors) => {
    return {
        type: CREATE_ROOM,
        payload: {
            errors
        }
    }
};