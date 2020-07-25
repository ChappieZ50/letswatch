import * as React from 'react';
import {useState} from "react";

import {useDispatch} from "react-redux";

import PropTypes from "prop-types";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";

import {Button} from "../../Landing/Button";
import {FrameModal} from "../FrameModal";
import {sendPlayer} from "../../../redux/actions/room/roomAction";

import {useLocalStorage} from "../../../hooks/useLocalStorage";

export const YoutubeModal = ({active, onClose}) => {

    const dispatch = useDispatch();
    const [storageUser] = useLocalStorage('user');
    const [storageRoom] = useLocalStorage('room');
    const [url, setUrl] = useState('');

    const handlePlayer = (e) => {
        setUrl(e.target.value);
    };

    const youtubeParser = (url) => {
        let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        let match = url.match(regExp);
        return (match && match[7].length == 11) ? 'https://youtube.com/watch?v=' + match[7] : false;
    };
    const handleClick = async () => {
        const payload = {
            type: 'youtube',
            url: youtubeParser(url),
            user_id: storageUser,
            room_id: storageRoom,
            seek: 0
        };
        await dispatch(sendPlayer(payload));
    };
    return (
        <FrameModal onClose={onClose} active={active} title="Youtube">
            <div className="frame-modal-icon">
                <FontAwesomeIcon icon={faYoutube}/>
            </div>
            <input type="text" className="form-control" placeholder="Paste a youtube video link" name="player" onChange={handlePlayer}/>
            <Button className="base-modal-button" onClick={handleClick}>Add</Button>
        </FrameModal>
    );
};

YoutubeModal.propTypes = {
    active: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
