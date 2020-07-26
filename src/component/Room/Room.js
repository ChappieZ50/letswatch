import * as React from 'react';

import {RoomUsers} from "./RoomUsers";
import {Frames} from "../Frames/Frames";
import {RoomVideoFrame} from "./RoomVideoFrame";
import {Chat} from "../Chat/Chat";

export const Room = () => {

    return (
        <div className="created-room">
            <div className="room-frame">
                <RoomVideoFrame/>
                <Frames/>
            </div>
            <RoomUsers/>
            <Chat/>
        </div>
    );
};