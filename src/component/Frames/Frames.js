import * as React from 'react';

import {YoutubeExtension} from "./Extensions/YoutubeExtension";
import {TwitchExtension} from "./Extensions/TwitchExtension";
import {useState} from "react";

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
            </div>
        </div>
    );
};