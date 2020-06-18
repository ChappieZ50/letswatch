import * as React from 'react';
import {useState} from "react";

import {Button} from "./Landing/Button";
import {JoinRoomModal} from "./Modals/JoinRoomModal";

export const JoinRoom = () => {


    const [modalActive, setModalActive] = useState(false);


    const handleModalActive = () => {
        setModalActive(!modalActive);
    };


    return (
        <>
            <Button className="join-room-button" onClick={handleModalActive}>Join Room</Button>
            <JoinRoomModal active={modalActive} onClose={handleModalActive}/>
        </>
    );
};