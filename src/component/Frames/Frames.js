import * as React from 'react';

import {YoutubeExtension} from "./Extensions/YoutubeExtension";
import {TwitchExtension} from "./Extensions/TwitchExtension";
import {CopyRoomExtension} from "./Extensions/CopyRoomExtension";
import {SyncExtension} from "./Extensions/SyncExtension";
import {CloseRoomExtension} from "./Extensions/CloseRoomExtension";
import {DailyMotionExtension} from "./Extensions/DailyMotionExtension";
import {VimeoExtension} from "./Extensions/VimeoExtension";
import {FacebookExtension} from "./Extensions/FacebookExtension";
import {SoundCloudExtension} from "./Extensions/SoundCloudExtension";

export const Frames = () => {

    return (
        <div className="room-open-frame">
            <div className="open-frame-items">
                <YoutubeExtension/>
                <FacebookExtension/>
                <TwitchExtension/>
                <DailyMotionExtension/>
                <VimeoExtension/>
                <SoundCloudExtension/>
                <CopyRoomExtension/>
                <SyncExtension/>
                <CloseRoomExtension/>
            </div>
        </div>
    );
};