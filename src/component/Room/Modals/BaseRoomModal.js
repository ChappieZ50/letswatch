import * as React from 'react';
import PropTypes from "prop-types";

import {BaseModal} from "../../BaseModal";

export const BaseRoomModal = ({children, title, active, onClose}) =>

    <BaseModal onClose={onClose} active={active} title={title}>
        {children}
    </BaseModal>;


BaseRoomModal.propTypes = {
    title: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
};
