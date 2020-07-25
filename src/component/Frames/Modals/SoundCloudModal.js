import * as React from 'react';
import {useState} from "react";
import PropTypes from "prop-types";

import {useDispatch} from "react-redux";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSoundcloud} from "@fortawesome/free-brands-svg-icons";

import {Button} from "../../Landing/Button";
import {FrameModal} from "../FrameModal";
import {sendPlayer} from "../../../redux/actions/room/roomAction";

import {useLocalStorage} from "../../../hooks/useLocalStorage";

export const SoundCloudModal = ({active, onClose}) => {

    const dispatch = useDispatch();
    const [storageUser] = useLocalStorage('user');
    const [storageRoom] = useLocalStorage('room');
    const [url, setUrl] = useState('');

    const handlePlayer = (e) => {
        setUrl(e.target.value);
    };

    const handleClick = async () => {
        const payload = {
            type: 'soundcloud',
            url,
            user_id: storageUser,
            room_id: storageRoom,
            seek: 0
        };
        await dispatch(sendPlayer(payload));
    };

    return (
        <FrameModal onClose={onClose} active={active} title="Sound Cloud">
            <div className="frame-modal-icon">
                <FontAwesomeIcon icon={faSoundcloud}/>
            </div>
            <input type="text" className="form-control" placeholder="Paste a Sound Cloud link"
                   name="player" onChange={handlePlayer}/>
            <Button className="base-modal-button" onClick={handleClick}>Add</Button>
        </FrameModal>
    );
};

SoundCloudModal.propTypes = {
    active: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
