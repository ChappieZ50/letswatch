import * as React from 'react';
import {useEffect} from "react";
import {useRef} from "react";

import {useDispatch, useSelector} from "react-redux";
import ReactPlayer from 'react-player';

import {useLocalStorage} from "../../hooks/useLocalStorage";
import {usePlayerSeekTo} from "../../hooks/usePlayerSeekTo";

import {onPlaying, setPlaying} from "../../redux/actions/room/videoAction";
import {videoListener} from '../../listeners/videoListener';

export const RoomVideoFrame = () => {

    const room = useSelector(state => state.room.data);
    const video = useSelector(state => state.video);

    const config = {
        youtube: {
            playerVars: {}
        }
    };

    const player = useRef();

    const [storageUser] = useLocalStorage('user');

    const dispatch = useDispatch();

    useEffect(() => {
        if (room.room_id) {
            videoListener(room.room_id, dispatch);
        }
    }, [room.room_id]);


    usePlayerSeekTo(player);

    const playerOnPlay = async () => {
        if (!video.playing) {
            playerOnPlayPause();
        }
    };

    const playerOnPause = () => {
        if (video.playing) {
            playerOnPlayPause(false);
        }
    };

   const playerOnPlayPause = (playing = true) => {
        const data = {
            playing,
            room_id: room.room_id,
            user_id: storageUser,
            seek: parseFloat(player.current.getCurrentTime()),
        };
        dispatch(onPlaying(data));
    };

    const playerOnReady = async (readyPlayer) => {
        await readyPlayer.seekTo(room.player.seek);
        if (!video.playing)
            dispatch(setPlaying({playing: true, seek: room.player.seek}));
    };

    return (
        <div className="video-frame">
            <ReactPlayer ref={player} playing={video.playing}
                         config={config}
                         controls={true}
                         url={room.player.url}
                         width="100%" height="100%" muted={true}
                         onReady={playerOnReady}
                         onPlay={playerOnPlay}
                         onPause={playerOnPause}/>
        </div>
    );
};