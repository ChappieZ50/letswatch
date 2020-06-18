import * as React from 'react';
import PropTypes from "prop-types";

export const RoomModal = ({children, title, active}) => {
    return (
        <div className={"room-modal" + (active ? ' room-modal-active' : '')}>
            <h4 className="modal-title" key="modal-title">{title}</h4>
            {children}
        </div>
    );
};

RoomModal.propTypes = {
    title: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
};
