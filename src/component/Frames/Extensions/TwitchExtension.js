import * as React from 'react';
import PropTypes from 'prop-types';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitch} from "@fortawesome/free-brands-svg-icons";

export const TwitchExtension = ({onClick}) => {

    const handleTwitch = () => {
        onClick({
            type: 'twitch',
            settings: {}
        });
    };

    return (
        <div className="frame-item" onClick={handleTwitch}>
            <FontAwesomeIcon icon={faTwitch}/>
        </div>
    );
};

TwitchExtension.propTypes = {
    onClick: PropTypes.func.isRequired,
};