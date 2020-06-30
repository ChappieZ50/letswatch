import * as React from 'react';
import PropTypes from "prop-types";

import {BaseModal} from "../../BaseModal";

export const BaseRoomModal = ({children, title, active, onClose}) => {
    return (
        <BaseModal onClose={onClose} active={active}>
            <div className={"room-modal" + (active ? ' room-modal-active' : '')}>
                <h4 className="modal-title" key="modal-title">{title}</h4>
                {children}
            </div>
        </BaseModal>
    );
};

BaseRoomModal.propTypes = {
    title: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
};
