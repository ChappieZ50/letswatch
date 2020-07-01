import * as React from 'react';
import PropTypes from 'prop-types';

import {Button} from "../../Landing/Button";
import {BaseRoomModal} from "./BaseRoomModal";


export const JoinRoomModal = ({active, onClose}) =>

    <BaseRoomModal onClose={onClose} active={active} title="Join a Room">
        <input type="text" className="form-control" placeholder="Room id"/>
        <Button className="base-modal-button">Join</Button>
    </BaseRoomModal>;


JoinRoomModal.propTypes = {
    active: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
