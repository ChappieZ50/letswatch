import * as React from 'react';
import PropTypes from "prop-types";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitch} from "@fortawesome/free-brands-svg-icons";

import {Button} from "../../Landing/Button";
import {FrameModal} from "../FrameModal";


export const TwitchModal = ({active, onClose}) =>

    <FrameModal onClose={onClose} active={active} title="Twitch Stream or Clip">
        <div className="frame-modal-icon">
            <FontAwesomeIcon icon={faTwitch}/>
        </div>
        <input type="text" className="form-control" placeholder="Paste a twitch stream video or clip link"/>
        <Button className="base-modal-button">Add</Button>
    </FrameModal>;

TwitchModal.propTypes = {
    active: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
