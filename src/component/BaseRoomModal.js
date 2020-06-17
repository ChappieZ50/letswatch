import * as React from 'react';
import Modal from "react-modal";
import PropTypes from 'prop-types';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};

export const BaseRoomModal = ({active, onClose, title,children}) => {
    Modal.setAppElement('*');
    return (
        <Modal isOpen={active} onRequestClose={onClose} style={customStyles}>
            <div className="join-room-modal">
                <h4 className="modal-title">{title}</h4>
                {children}
            </div>
        </Modal>
    );
};

BaseRoomModal.propTypes = {
    active: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};
