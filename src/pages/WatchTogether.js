import * as React from 'react';

import {CreateRoom} from "../component/CreateRoom";
import {JoinRoom} from "../component/JoinRoom";

export const WatchTogether = () => {
    return (
        <div className="watch-together">
            <div className="room-buttons col-md-12 h-100">
                <JoinRoom/>
                <CreateRoom/>
            </div>
        </div>
    );
};