import * as React from 'react';
import {useState} from "react";
import PropTypes from 'prop-types';

import ReactTooltip from "react-tooltip";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitch} from "@fortawesome/free-brands-svg-icons";
import {TwitchModal} from "../Modals/TwitchModal";

export const TwitchExtension = ({onClick}) => {

    const [modalActive, setModalActive] = useState(false);


    const handleModalActive = () => {
        setModalActive(!modalActive);
    };

    const handleTwitch = () => {
        onClick({
            type: 'twitch',
            settings: {}
        });

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

TwitchExtension.propTypes = {
    onClick: PropTypes.func.isRequired,
};