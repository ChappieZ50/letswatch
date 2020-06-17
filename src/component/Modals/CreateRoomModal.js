import * as React from 'react';
import PropTypes from 'prop-types';
import {useState,useEffect} from "react";
import {useHistory} from "react-router";

import Button from "../Landing/Button";
import {BaseRoomModal} from "../BaseRoomModal";

import {useLocalStorage} from "../../hooks/useLocalStorage";


export const CreateRoomModal = ({active, onClose}) => {

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
        <BaseRoomModal onClose={onClose} active={active} title="Create a Room">
            <input type="text" className="form-control" placeholder="Username"/>
            <Button className="join-room-button" onClick={handleClick}>Create</Button>
        </BaseRoomModal>
    );
};

CreateRoomModal.propTypes = {
    active: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
