import * as React from 'react';
import {useState} from "react";

import {useSelector} from "react-redux";

import {YoutubeExtension} from "./Extensions/YoutubeExtension";
import {TwitchExtension} from "./Extensions/TwitchExtension";
import {CopyRoomExtension} from "./Extensions/CopyRoomExtension";
import {SyncExtension} from "./Extensions/SyncExtension";
import {CloseRoomExtension} from "./Extensions/CloseRoomExtension";

export const Frames = () => {

    return (
        <div className="room-open-frame">
            <div className="open-frame-items">
                <YoutubeExtension/>
                <TwitchExtension/>
                <CopyRoomExtension/>
                <SyncExtension/>
                <CloseRoomExtension/>
            </div>
        </div>
    );
};