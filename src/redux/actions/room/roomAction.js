import axios from 'axios';
import PNotify from 'pnotify/dist/es/PNotify';

import {ROOM_CREATE, ROOM_GET, ROOM_JOIN, ROOM_PLAYER_ON_CHANGE, ROOM_SET} from "../actionTypes";

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
        dispatch(successGetRoom(response.data, state.user_id));
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

export const sendPlayer = (state) => dispatch => {
    axios.post(API + '/room/new-player', state)
        .then(() => {
            dispatch(setPlayer(state));
        });
};

export const setPlayer = ({type, url, seek}) => dispatch => {
    return dispatch({
        type: ROOM_PLAYER_ON_CHANGE,
        payload: {
            type,
            url,
            seek
        }
    });
};

/* SUCCESS and ERROR DISPATCHES */

export const successGetRoom = (data, userId) => {
    const user = data.users.filter(user => user.user_id === userId);

    return {
        type: ROOM_GET,
        payload: {
            data,
            errors: [],
            status: true,
            user: user[0] ? user[0] : false
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