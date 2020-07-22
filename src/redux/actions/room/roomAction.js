import axios from 'axios';
import PNotify from 'pnotify/dist/es/PNotify';

import {ROOM_CREATE, ROOM_DELETE_OR_EXIT, ROOM_GET, ROOM_JOIN, ROOM_SET} from "../actionTypes";

import {API} from "../../../config";

export const createRoom = state => dispatch => {

    axios.post(API + '/room', state)
        .then(response => {
            PNotify.success('Room created');
            dispatch(success(JSON.parse(response.data)))
        })
        .catch(error => {
            PNotify.error('Failed to create room');
            if (error.response.data) {
                dispatch(failed(error.response.data))
            }
        })
};

export const joinRoom = state => dispatch => {
    axios.post(API + '/room/join', state)
        .then(response => {
            PNotify.success('You joined the room');
            dispatch(successJoin(JSON.parse(response.data)))
        })
        .catch(error => {
            PNotify.error('Failed to join room');
            if (error.response.data) {
                dispatch(failedJoin(error.response.data))
            }
        });
};

export const getRoom = state => dispatch => {
    const url = API + '/room/' + state.room_id + '/user/' + state.user_id;

    axios.get(url).then(response => {
        dispatch(successGetRoom(response.data));
    }).catch(() => {
        localStorage.removeItem('room');
    });
};

export const deleteOrExitRoom = state => dispatch => {
    const url = API + '/room/' + state.room_id + '/user/' + state.user_id;

    axios.delete(url)
        .then(() => {
            localStorage.removeItem('room');
            dispatch(setRoom({}, false));
        })
        .then(() => {
            window.location.reload();
        })
        .catch(() => {
            if (state.owner) {
                PNotify.error('Failed to close room');
            } else {
                PNotify.error('Failed to exit room');
            }
        });
};


export const setRoom = (data, status = true) => dispatch => {
    return dispatch({
        type: ROOM_SET,
        payload: {
            data,
            status
        }
    });
};

/* SUCCESS and ERROR DISPATCHES */

export const successGetRoom = data => {
    return {
        type: ROOM_GET,
        payload: {
            data,
            errors: [],
            status: true,
        }
    }
};

export const success = data => {
    return {
        type: ROOM_CREATE,
        payload: {
            data,
            status: true,
            errors: []
        }
    }
};

export const failed = errors => {
    return {
        type: ROOM_CREATE,
        payload: {
            errors
        }
    }
};


export const successJoin = (data) => {
    return {
        type: ROOM_JOIN,
        payload: {
            data,
            status: true,
            errors: []
        }
    }
};
export const failedJoin = (errors) => {
    return {
        type: ROOM_JOIN,
        payload: {
            joinErrors: errors
        }
    }
};