import * as React from 'react';
import {useState, useLayoutEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {getRoom} from "../redux/actions/room/roomAction";

import {CreateOrJoinRoom} from "../component/Room/CreateOrJoinRoom";
import {Room} from "../component/Room/Room";

export const WatchTogether = () => {

    const room = useSelector(state => state.room);
    const dispatch = useDispatch();

    const [active, setActive] = useState(false);

    useLayoutEffect(() => {
        if (localStorage.getItem('room') !== null) {
            // Room already created but not get and now getting room
            dispatch(getRoom({
                room_id: JSON.parse(localStorage.getItem('room')),
                user_id: JSON.parse(localStorage.getItem('user')),
            }));
        }
    }, []);

    useLayoutEffect(() => {
        if (room.data.room_id) {
            // If room exists
            setActive(true)
        }
    }, [room.data.room_id]);

    useLayoutEffect(() => {
        if (localStorage.getItem('room') !== null && room.status) {
            // Room created and already have status and room storage
            setActive(true);
        }
    }, [room.status]);

    return (
        <div className="watch-together">
            {
                active ? <Room/> : <CreateOrJoinRoom/>
            }
        </div>
    );
};
