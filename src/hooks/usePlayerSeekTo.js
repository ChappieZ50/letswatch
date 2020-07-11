import * as React from 'react';
import {useEffect} from "react";

import {useSelector} from "react-redux";
import {useLocalStorage} from "./useLocalStorage";

export const usePlayerSeekTo = (player) => {

    const video = useSelector(state => state.video);
    const [storageUser] = useLocalStorage('user');

    useEffect(() => {
        playerSeekTo();
    }, [video.seek]);

    const playerSeekTo = () => {
        if (video.user_id && video.user_id !== storageUser) {
            player.current.seekTo(video.seek);
        }
    };
};