import * as React from 'react';

import {RoomUsers} from "./RoomUsers";
import {RoomFrame} from "./RoomFrame";

export const Room = () => {
    return (
        <div className="created-room">
            <RoomFrame/>
            <RoomUsers/>
        </div>
    );
};