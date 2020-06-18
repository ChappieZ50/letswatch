import * as React from 'react';
import Modal from "react-modal";
import PropTypes from 'prop-types';
import {Loading} from "./Partials/Loading";
import {useEffect} from "react";
import {useState} from "react";
import {RoomModal} from "./Partials/RoomModal";

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

export const BaseRoomModal = ({active, onClose, title, children}) => {
    Modal.setAppElement('*');

    const [loadingActive, setLoadingActive] = useState(false);

    useEffect(() => {
        if (active) {
            setLoadingActive(true);
            setTimeout(() => setLoadingActive(false),1000);
        }

    }, [active]);

    return (
        <Modal isOpen={active} onRequestClose={onClose} style={customStyles}>
            <Loading active={loadingActive}/>
            <RoomModal title={title} active={!loadingActive}>
                {children}
            </RoomModal>
        </Modal>
    );
};

BaseRoomModal.propTypes = {
    active: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};
