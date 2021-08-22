import * as React from 'react';
import {useEffect} from "react";
import {useRef} from "react";

import {useDispatch, useSelector} from "react-redux";
import ReactPlayer from 'react-player';

import {useLocalStorage} from "../../hooks/useLocalStorage";
import {usePlayerSeekTo} from "../../hooks/usePlayerSeekTo";

import {onPlaying, onSeeked, setPlaying} from "../../redux/actions/room/videoAction";
import {roomListener} from "../../listeners/roomListener";
import {HeaderFrames} from "../Frames/HeaderFrames";

export const RoomVideoFrame = () => {

    const room = useSelector(state => state.room.data);
    const video = useSelector(state => state.video);

    const player = useRef();

    const [storageUser] = useLocalStorage('user');

    const dispatch = useDispatch();

    useEffect(() => {
        if (room.room_id) {
            roomListener(room.room_id, dispatch);
        }
    }, [room.room_id]);

    useEffect(() => {
        if (video.sync) {
            playerOnPlayPause();
        }
    }, [video.sync]);

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

    // This method not working for youtube and sound cloud
    const handleSeek = () => {
        const data = {
            playing: player.current.player.isPlaying,
            room_id: room.room_id,
            user_id: storageUser,
            seek: parseFloat(player.current.getCurrentTime()),
        };
        //dispatch(onSeeked(data));
        dispatch(onPlaying(data));
    };

    const playerOnReady = async (readyPlayer) => {
        await readyPlayer.seekTo(room.player.seek);
        if (!video.playing) {
            dispatch(setPlaying({playing: true, seek: room.player.seek}));
        }
    };

    return (
        <>
            <HeaderFrames/>
            <div className="video-frame">
                <ReactPlayer onSeek={handleSeek} ref={player} playing={video.playing} className="react-player"
                             controls={true}
                             url={room.player.url}
                             width="100%" height="100%" muted={true}
                             onReady={playerOnReady}
                             onPlay={playerOnPlay}
                             onPause={playerOnPause}/>
            </div>
        </>
    );
};