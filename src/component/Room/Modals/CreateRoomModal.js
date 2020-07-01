import * as React from 'react';
import {useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import PropTypes from 'prop-types';

import {RECAPTCHA_KEY} from "../../../config";

import Recaptcha from 'react-recaptcha';

import {Button} from "../../Landing/Button";
import {BaseRoomModal} from "./BaseRoomModal";

import {createRoom} from "../../../redux/actions/room/roomAction";
import {ParseErrors} from "../../Partials/ParseErrors";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import {useEffect} from "react";
import {Gender} from "../../Partials/Gender";


export const CreateRoomModal = ({active, onClose}) => {

    const [inputs, setInput] = useState({username: ''});
    const [recaptcha, setRecaptcha] = useState('');

    const [storageRoom, setStorageRoom] = useLocalStorage('room');
    const [storageUser, setStorageUser] = useLocalStorage('user');

    const dispatch = useDispatch();

    const room = useSelector(state => state.room);

    useEffect(() => {
        if (room.status) {
            setStorageRoom(room.data);
            onClose();
        }
    }, [room.data]);

    const handleClick = () => {
        dispatch(createRoom({
            recaptcha,
            uuid: storageUser,
            ...inputs
        }));

    };

    const handleChange = (e) => {
        setInput({
            ...inputs,
            [e.target.name]: e.target.value
        })
    };

    const handleGender = (gender) => {
        setInput({
            ...inputs,
            gender
        })
    };

    const verifyCallback = (response) => {
        setRecaptcha(response);
    };
    return (
        <BaseRoomModal onClose={onClose} active={active} title="Create a Room">
            <input type="text" className="form-control" placeholder="Username" name="username" onChange={e => handleChange(e)}
                   defaultValue={inputs.username}/>

            <Gender handleGender={handleGender}/>

            <Recaptcha sitekey={RECAPTCHA_KEY} render="explicit" verifyCallback={verifyCallback} theme="dark"/>

            <ParseErrors errors={room.errors}/>

            <Button className="base-modal-button" onClick={handleClick}>Create</Button>
        </BaseRoomModal>
    );
};

CreateRoomModal.propTypes = {
    active: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
