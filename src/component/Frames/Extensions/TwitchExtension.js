import * as React from 'react';
import PropTypes from 'prop-types';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitch} from "@fortawesome/free-brands-svg-icons";
import {useState} from "react";
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
            <div className="frame-item" onClick={handleTwitch}>
                <FontAwesomeIcon icon={faTwitch}/>
            </div>
            <TwitchModal onClose={handleModalActive} active={modalActive}/>
        </>
    );
};

TwitchExtension.propTypes = {
    onClick: PropTypes.func.isRequired,
};