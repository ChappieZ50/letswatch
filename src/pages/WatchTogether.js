import * as React from 'react';
import {useState, useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {getRoom} from "../redux/actions/room/roomAction";

import {useLocalStorage} from "../hooks/useLocalStorage";

import {CreateOrJoinRoom} from "../component/Room/CreateOrJoinRoom";
import {Room} from "../component/Room/Room";

export const WatchTogether = () => {

    const [storageRoom, setStorageRoom] = useLocalStorage('room');
    const [storageUser, setStorageUser] = useLocalStorage('user');

    const room = useSelector(state => state.room);

    const [roomActive, setRoomActive] = useState(room.status);

    const dispatch = useDispatch();

    useEffect(() => {
        if (room.status) {
            setRoomActive(true);
        } else if (storageRoom) {
            dispatch(getRoom({
                room_id: storageRoom,
                user_id: storageUser,
            }));
            setRoomActive(true);
        }
    }, [storageRoom, room.status]);

    return (
        <div className="watch-together">
            {
                roomActive ? <Room/> : <CreateOrJoinRoom/>
            }
        </div>
    );
};