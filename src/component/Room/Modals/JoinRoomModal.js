import * as React from 'react';
import {useState, useEffect} from "react";
import PropTypes from 'prop-types';

import Recaptcha from "react-recaptcha";

import {useDispatch, useSelector} from "react-redux";
import {useLocalStorage} from "../../../hooks/useLocalStorage";

import {RECAPTCHA_KEY} from "../../../config";

import {Button} from "../../Landing/Button";
import {BaseRoomModal} from "./BaseRoomModal";
import {joinRoom} from "../../../redux/actions/room/roomAction";
import {ParseErrors} from "../../Partials/ParseErrors";
import {Gender} from "../../Partials/Gender";
import {roomListener} from "../../../listeners/roomListener";

export const JoinRoomModal = ({active, onClose}) => {

    const dispatch = useDispatch();
    const room = useSelector(state => state.room);

    const [storageUser] = useLocalStorage('user');

    const [inputs, setInput] = useState({
        username: ''
    });
    const [recaptcha, setRecaptcha] = useState('');

    const verifyCallback = (response) => {
        setRecaptcha(response);
    };


    const handleChange = (e) => {
        setInput({
            ...inputs,
            [e.target.name]: e.target.value
        })
    };

    const handleJoin = () => {
        const payload = {
            ...inputs,
            recaptcha,
            user_id: storageUser
        };

        dispatch(joinRoom(payload));
    };

    const handleGender = (gender) => {
        setInput({
            ...inputs,
            gender
        })
    };

    return (
        <BaseRoomModal onClose={onClose} active={active} title="Join a Room">
            <input type="text" className="form-control" placeholder="Room id" name="room_id" onChange={handleChange}/>

            <input type="text" className="form-control mt-3" placeholder="Username" name="username" onChange={handleChange}
                   defaultValue={inputs.username}/>

            <Gender handleGender={handleGender}/>

            <Recaptcha sitekey={RECAPTCHA_KEY} render="explicit" verifyCallback={verifyCallback} theme="dark"/>

            <ParseErrors errors={room.joinErrors}/>
            <Button className="base-modal-button" onClick={handleJoin}>Join</Button>
        </BaseRoomModal>
    );
};


JoinRoomModal.propTypes = {
    active: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
