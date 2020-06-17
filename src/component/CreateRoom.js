import * as React from 'react';
import Button from "./Landing/Button";
import {useState} from "react";

import {CreateRoomModal} from "./Modals/CreateRoomModal";

export const CreateRoom = () => {
    const [modalActive, setModalActive] = useState(false);

    const handleModalActive = () => {
        setModalActive(!modalActive);
    };

    return (
        <>
            <CreateRoomModal active={modalActive} onClose={handleModalActive}/>
            <Button className="create-room-button" onClick={handleModalActive}>Create room</Button>
        </>
    );
};