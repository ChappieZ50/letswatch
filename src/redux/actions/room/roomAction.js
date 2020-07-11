import axios from 'axios';
import PNotify from 'pnotify/dist/es/PNotify';

import {CREATE_ROOM, GET_ROOM} from "../actionTypes";

import {API} from "../../../config";

export const createRoom = state => dispatch => {

    axios.post(API + '/room', state)
        .then(response => {
            PNotify.success('Room created');
            dispatch(success(JSON.parse(response.data)))
        })
        .catch(error => {
            PNotify.error('Failed to create room');
            dispatch(failed(error.response.data))
        })
};

export const getRoom = (data) => dispatch => {
    const url = API + '/room/' + data.room_id + '/user/' + data.user_id;

    axios.get(url).then(response => {
        dispatch(successGetRoom(JSON.parse(response.data)));
    }).catch(() => {
        localStorage.removeItem('room');
    });
};

export const successGetRoom = (data) => {
    return {
        type: GET_ROOM,
        payload: {
            data,
            errors: []
        }
    }
};

export const success = (data) => {
    return {
        type: CREATE_ROOM,
        payload: {
            data,
            status: true,
            errors: []
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

