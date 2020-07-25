import * as React from 'react';
import {useState, useEffect} from "react";

import {useSelector} from "react-redux";

import ReactTooltip from "react-tooltip";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";

import {FacebookModal} from "../Modals/FacebookModal";

export const FacebookExtension = () => {

    const [modalActive, setModalActive] = useState(false);
    const player = useSelector(state => state.room.data.player);

    useEffect(() => {
        setModalActive(false);
    }, [player]);

    const handleModalActive = () => {
        setModalActive(!modalActive);
    };

    const handleFacebook = () => {
        setModalActive(!modalActive);
    };

    return (
        <>
            <div className="frame-item" data-tip data-for="frameFacebook" onClick={handleFacebook}>
                <FontAwesomeIcon icon={faFacebookF}/>
            </div>
            <ReactTooltip id="frameFacebook" place="top" effect="solid">
                Facebook
            </ReactTooltip>

            <FacebookModal onClose={handleModalActive} active={modalActive}/>
        </>
    );
};