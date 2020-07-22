import * as React from 'react';
import {useState, useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {getRoom} from "../redux/actions/room/roomAction";

import {CreateOrJoinRoom} from "../component/Room/CreateOrJoinRoom";
import {Room} from "../component/Room/Room";

export const WatchTogether = () => {

    const room = useSelector(state => state.room);
    const dispatch = useDispatch();

    const [active, setActive] = useState(false);

    useEffect(() => {
        if (room.status) {
            setActive(true);
        } else if (!room.data.room_id && localStorage.getItem('room') === null) {
            setActive(false);
        } else {
            setActive(false);
        }
    }, [room.status]);

    useEffect(() => {
        if (localStorage.getItem('room') !== null) {
            // getting room
            dispatch(getRoom({
                room_id: JSON.parse(localStorage.getItem('room')),
                user_id: JSON.parse(localStorage.getItem('user')),
            }));
        }
    }, []);

    return (
        <div className="watch-together">
            {
                active && room.data.room_id ? <Room/> : <CreateOrJoinRoom/>
            }
        </div>
    );
};
