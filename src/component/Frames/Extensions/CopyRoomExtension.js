import * as React from 'react';
import {useState} from "react";

import ReactTooltip from "react-tooltip"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {faClone} from "@fortawesome/free-regular-svg-icons/faClone";

import {useLocalStorage} from "../../../hooks/useLocalStorage";

export const CopyRoomExtension = () => {

    const [room] = useLocalStorage('room');
    const [copy, setCopy] = useState(false);

    const onCopy = () => {
        setCopy(true);
        setTimeout(() => setCopy(false), 1000);
    };

    return (
        <>
            <CopyToClipboard text={room} onCopy={onCopy}>
                <div className="frame-item" data-tip data-for="frameCopy">
                    <FontAwesomeIcon icon={faClone}/>
                </div>
            </CopyToClipboard>
            <ReactTooltip id="frameCopy" place="top" effect="solid">
                {
                    copy ?
                        <span style={{color: '#5f9b49'}}>
                            Copied Room ID
                        </span>
                        : 'Copy Room ID'
                }
            </ReactTooltip>
        </>

    );
};