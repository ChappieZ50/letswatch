import * as React from 'react';
import PropTypes from "prop-types";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";

import {Button} from "../../Landing/Button";
import {FrameModal} from "../FrameModal";


export const YoutubeModal = ({active, onClose}) =>

    <FrameModal onClose={onClose} active={active} title="Youtube Video">
        <div className="frame-modal-icon">
            <FontAwesomeIcon icon={faYoutube}/>
        </div>
        <input type="text" className="form-control" placeholder="Paste a youtube video link"/>
        <Button className="base-modal-button">Add </Button>
    </FrameModal>;

YoutubeModal.propTypes = {
    active: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
