import * as React from 'react';
import {useState} from "react";
import PropTypes from "prop-types";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {YoutubeModal} from "../Modals/YoutubeModal";

export const YoutubeExtension = ({onClick}) => {

    const [modalActive, setModalActive] = useState(false);


    const handleModalActive = () => {
        setModalActive(!modalActive);
    };

    const handleYoutube = async () => {
        await onClick({
            type: 'youtube',
            settings: {}
        });

        setModalActive(!modalActive);
    };

    return (
        <>
            <div className="frame-item" onClick={handleYoutube}>
                <FontAwesomeIcon icon={faYoutube}/>
            </div>
            <YoutubeModal onClose={handleModalActive} active={modalActive}/>
        </>
    );
};

YoutubeExtension.propTypes = {
    onClick: PropTypes.func.isRequired,
};