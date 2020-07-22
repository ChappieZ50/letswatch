import * as React from 'react';
import {useState, useEffect} from "react";

import {useSelector} from "react-redux";

import ReactTooltip from "react-tooltip";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitch} from "@fortawesome/free-brands-svg-icons";
import {TwitchModal} from "../Modals/TwitchModal";

export const TwitchExtension = () => {

    const [modalActive, setModalActive] = useState(false);
    const player = useSelector(state => state.room.data.player);

    useEffect(() => {
        setModalActive(false);
    }, [player]);

    const handleModalActive = () => {
        setModalActive(!modalActive);
    };

    const handleTwitch = () => {
        setModalActive(!modalActive);
    };

    return (
        <>
            <div className="frame-item" data-tip data-for="frameTwitch" onClick={handleTwitch}>
                <FontAwesomeIcon icon={faTwitch}/>
            </div>
            <ReactTooltip id="frameTwitch" place="top" effect="solid">
                Twitch
            </ReactTooltip>
            <TwitchModal onClose={handleModalActive} active={modalActive}/>
        </>
    );
};