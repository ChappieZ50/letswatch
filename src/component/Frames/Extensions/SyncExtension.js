import * as React from 'react';
import {useState, useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";

import ReactTooltip from "react-tooltip";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";
import {syncPlayer} from "../../../redux/actions/room/videoAction";

export const SyncExtension = () => {

    const video = useSelector(state => state.video);
    const dispatch = useDispatch();
    const [syncing, setSyncing] = useState(false);

    useEffect(() => {
        if (video.sync) {
            setSyncing(false);
            setTimeout(() => {
                dispatch(syncPlayer({sync: false}));
            }, 1000);
        }
    }, [video.sync]);

    const handleSync = () => {
        setSyncing(true);
       setTimeout(() => {
           dispatch(syncPlayer({sync: true}));
       },400)
    };

    return (
        <>
            <div className="frame-item" data-tip data-for="frameSync" onClick={handleSync}>
                <FontAwesomeIcon icon={faCircleNotch} className={syncing ? 'fa-spin' : ''}/>
            </div>
            <ReactTooltip id="frameSync" place="top" effect="solid">
                {
                    video.sync ?
                        <span style={{color: '#5f9b49'}}>
                            Player Synced
                        </span>
                        : 'Sync Player'
                }

            </ReactTooltip>
        </>
    );
};