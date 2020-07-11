import axios from 'axios';
import PNotify from 'pnotify/dist/es/PNotify';

import {API} from "../../../config";
import {VIDEO_ON_PLAYING} from "../actionTypes";

export const onPlaying = state => () => {
    axios.post(API + '/video-actions/on-playing', state).catch(() => {
        PNotify.error('Sync problem!');
    });
};

export const setPlaying = ({playing, seek, user_id}) => dispatch => {
    return dispatch({
        type: VIDEO_ON_PLAYING,
        payload: {
            playing,
            seek,
            user_id
        }
    });
};