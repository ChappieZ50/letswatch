import * as React from 'react';
import {useState, useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";

import ReactTooltip from "react-tooltip";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons/faWindowClose";
import {CloseRoomVerify} from "./ExtensionComponent/CloseRoomVerify";

import {useLocalStorage} from "../../../hooks/useLocalStorage";
import {deleteOrExitRoom, setRoom} from "../../../redux/actions/room/roomAction";

export const CloseRoomExtension = () => {

    const dispatch = useDispatch();
    const room = useSelector(state => state.room);

    const [storageUser] = useLocalStorage('user');

    const [close, setClose] = useState(false);

    const handleClose = () => {
        setClose(!close);
    };

    const handleCloseRoomVerify = (status, verify) => {
        setClose(status);
        if (verify) {
            const payload = {
                user_id: storageUser,
                room_id: room.data.room_id,
                owner: room.data.owner_id === storageUser
            };
            dispatch(deleteOrExitRoom(payload));
        }
    };

    return (
        <>
            <div className="frame-item" data-tip data-for="frameCloseRoom" onClick={handleClose}>
                {
                    close ? <CloseRoomVerify closeExtension={handleCloseRoomVerify}/> : <FontAwesomeIcon icon={faWindowClose}/>
                }
            </div>
            <ReactTooltip id="frameCloseRoom" place="top" effect="solid">
                {
                    room.data.owner_id === storageUser ? 'Close The Room' : 'Exit Room'
                }
            </ReactTooltip>
        </>
    );
};