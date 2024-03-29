import * as React from 'react';
import PropTypes from 'prop-types';
import Modal from "react-modal";

import {Loading} from "./Partials/Loading";
import {useEffect} from "react";
import {useState} from "react";

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

export const BaseModal = ({active, onClose, children, title}) => {
    Modal.setAppElement('*');

    const [loadingActive, setLoadingActive] = useState(false);

    useEffect(() => {
        if (active) {
            setLoadingActive(true);
            setTimeout(() => setLoadingActive(false), 1000);
        }

    }, [active]);

    return (
        <Modal isOpen={active} onRequestClose={onClose} style={customStyles}>
            <Loading active={loadingActive}/>
            <div className={loadingActive ? 'd-none' : 'd-block'}>
                <div className={"base-modal" + (active ? ' base-modal-active' : '')}>
                    <h4 className="modal-title" key="modal-title">{title}</h4>
                    {children}
                </div>
            </div>
        </Modal>
    );
};

BaseModal.propTypes = {
    active: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};
