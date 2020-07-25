import * as React from 'react';
import {useState} from "react";
import PropTypes from "prop-types";

import {useDispatch} from "react-redux";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMixcloud} from "@fortawesome/free-brands-svg-icons";

import {Button} from "../../Landing/Button";
import {FrameModal} from "../FrameModal";
import {sendPlayer} from "../../../redux/actions/room/roomAction";

import {useLocalStorage} from "../../../hooks/useLocalStorage";

export const MixCloudModal = ({active, onClose}) => {

    const dispatch = useDispatch();
    const [storageUser] = useLocalStorage('user');
    const [storageRoom] = useLocalStorage('room');
    const [url, setUrl] = useState('');

    const handlePlayer = (e) => {
        setUrl(e.target.value);
    };

    const handleClick = async () => {
        const payload = {
            type: 'mixcloud',
            url,
            user_id: storageUser,
            room_id: storageRoom,
            seek: 0
        };
        await dispatch(sendPlayer(payload));
    };

    return (
        <FrameModal onClose={onClose} active={active} title="Mix Cloud">
            <div className="frame-modal-icon">
                <FontAwesomeIcon icon={faMixcloud}/>
            </div>
            <input type="text" className="form-control" placeholder="Paste a Mix Cloud link"
                   name="player" onChange={handlePlayer}/>
            <Button className="base-modal-button" onClick={handleClick}>Add</Button>
        </FrameModal>
    );
};

MixCloudModal.propTypes = {
    active: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
