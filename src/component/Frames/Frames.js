import * as React from 'react';

import {CopyRoomExtension} from "./Extensions/CopyRoomExtension";
import {SyncExtension} from "./Extensions/SyncExtension";
import {CloseRoomExtension} from "./Extensions/CloseRoomExtension";

export const Frames = () => {

    return (
        <div className="room-open-frame">
            <div className="open-frame-items">
                <CopyRoomExtension/>
                <SyncExtension/>
                <CloseRoomExtension/>
            </div>
        </div>
    );
};