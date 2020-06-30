import * as React from 'react';

import {Frames} from "../Frames/Frames";

export const RoomFrame = () => {
    return (
        <div className="room-frame">
            <div className="room-open-frame">
                <Frames/>
            </div>
        </div>
    );
};