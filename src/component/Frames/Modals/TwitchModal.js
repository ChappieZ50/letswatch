import * as React from 'react';
import {useState} from "react";
import PropTypes from "prop-types";

import {useDispatch} from "react-redux";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitch} from "@fortawesome/free-brands-svg-icons";

import {Button} from "../../Landing/Button";
import {FrameModal} from "../FrameModal";
import {sendPlayer} from "../../../redux/actions/room/roomAction";

import {useLocalStorage} from "../../../hooks/useLocalStorage";

export const TwitchModal = ({active, onClose}) => {

    const dispatch = useDispatch();
    const [storageUser] = useLocalStorage('user');
    const [storageRoom] = useLocalStorage('room');
    const [url, setUrl] = useState('');

    const handlePlayer = (e) => {
        setUrl(e.target.value);
    };

    const handleClick = async () => {
        const payload = {
            type: 'twitch',
            url,
            user_id: storageUser,
            room_id: storageRoom,
            seek: 0
        };
        await dispatch(sendPlayer(payload));
    };

    return (
        <FrameModal onClose={onClose} active={active} title="Twitch Stream or Clip">
            <div className="frame-modal-icon">
                <FontAwesomeIcon icon={faTwitch}/>
            </div>
            <input type="text" className="form-control" placeholder="Paste a twitch stream video or clip link"
                   name="player" onChange={handlePlayer}/>
            <Button className="base-modal-button" onClick={handleClick}>Add</Button>
        </FrameModal>
    );
};

TwitchModal.propTypes = {
    active: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
