import axios from 'axios';

import {CREATE_ROOM} from "../actionTypes";

import {API} from "../../../config";

export const createRoom = state => dispatch => {

    axios.post(API + '/room', state)
        .then(response => {
            dispatch(success(JSON.parse(response.data)))
        })
        .catch(error => {
            dispatch(failed(error.response.data))
        })
};

export const success = (data) => {
    return {
        type: CREATE_ROOM,
        payload: {
            data,
            status: true
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