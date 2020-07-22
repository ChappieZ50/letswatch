import * as React from 'react';

import {YoutubeExtension} from "./Extensions/YoutubeExtension";
import {TwitchExtension} from "./Extensions/TwitchExtension";
import {useState} from "react";
import {CopyRoomExtension} from "./Extensions/CopyRoomExtension";
import {SyncExtension} from "./Extensions/SyncExtension";
import {CloseRoomExtension} from "./Extensions/CloseRoomExtension";

export const Frames = () => {

    const [frame, setFrame] = useState({
        type: '',
        settings: {}
    });

    const handleFrame = (extension) => {
        setFrame(extension);
    };

    return (
        <div className="room-open-frame">
            <div className="open-frame-items">
                <YoutubeExtension onClick={handleFrame}/>
                <TwitchExtension onClick={handleFrame}/>
                <CopyRoomExtension/>
                <SyncExtension/>
                <CloseRoomExtension/>
            </div>
        </div>
    );
};