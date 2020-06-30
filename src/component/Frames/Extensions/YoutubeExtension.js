import * as React from 'react';
import PropTypes from "prop-types";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";

export const YoutubeExtension = ({onClick}) => {

    const handleYoutube = () => {
        onClick({
            type: 'youtube',
            settings: {}
        });
    };

    return (
        <div className="frame-item" onClick={handleYoutube}>
            <FontAwesomeIcon icon={faYoutube}/>
        </div>
    );
};

YoutubeExtension.propTypes = {
    onClick: PropTypes.func.isRequired,
};