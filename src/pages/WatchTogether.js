import * as React from 'react';
import {useState, useEffect} from "react";
import {useSelector} from "react-redux";

import {useLocalStorage} from "../hooks/useLocalStorage";

import {CreateOrJoinRoom} from "../component/Room/CreateOrJoinRoom";
import {Room} from "../component/Room/Room";

export const WatchTogether = () => {

    const [storageRoom, setStorageRoom] = useLocalStorage('room');

    const [roomActive, setRoomActive] = useState(!!storageRoom);

    const room = useSelector(state => state.room);

    useEffect(() => {
        if (storageRoom || room.status) {
            setRoomActive(true);
        }
    }, [room, storageRoom]);

    return (
        <div className="watch-together">
                {
                    roomActive ? <Room/> : <CreateOrJoinRoom/>
                }

        </div>
    );
};