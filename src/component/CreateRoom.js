import * as React from 'react';
import Button from "./Landing/Button";
import {useState,useEffect} from "react";
import {useHistory} from "react-router";
import {useLocalStorage} from "../hooks/useLocalStorage";

export const CreateRoom = () => {
    const fakeRoom = 'crlh6qxspyen3p56im';
    const [room, setRoom] = useState('');
    const [name, setName] = useLocalStorage('room', '');

    let history = useHistory();

    useEffect(() => {
        if (room.length > 0) {
            console.log('This is your room id: ' + room);
            setName(room);
            history.push('?room=' + room);
        }
    }, [room]);

    const handleClick = () => {
        setRoom(fakeRoom);
    };

    return (
        <Button className="create-room-button" onClick={handleClick}>Create room</Button>
    );
};