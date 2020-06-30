import * as React from 'react';
import {JoinRoom} from "./JoinRoom";
import {CreateRoom} from "./CreateRoom";

export const CreateOrJoinRoom = () => {
    return (
        <div className="room-buttons col-md-12 h-100">
            <JoinRoom/>
            <CreateRoom/>
        </div>
    );
};