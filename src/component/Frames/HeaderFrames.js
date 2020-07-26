import * as React from 'react';

import {YoutubeExtension} from "./Extensions/YoutubeExtension";
import {TwitchExtension} from "./Extensions/TwitchExtension";


import {DailyMotionExtension} from "./Extensions/DailyMotionExtension";
import {VimeoExtension} from "./Extensions/VimeoExtension";
import {FacebookExtension} from "./Extensions/FacebookExtension";
import {SoundCloudExtension} from "./Extensions/SoundCloudExtension";

export const HeaderFrames = () => {

    return (
        <div className="room-open-frame">
            <div className="open-frame-items header-frames">
                <YoutubeExtension/>
                <FacebookExtension/>
                <TwitchExtension/>
                <DailyMotionExtension/>
                <VimeoExtension/>
                <SoundCloudExtension/>
            </div>
        </div>
    );
};