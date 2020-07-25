import * as React from 'react';
import {useState, useEffect} from "react";

import {useSelector} from "react-redux";

import ReactTooltip from "react-tooltip";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVimeo} from "@fortawesome/free-brands-svg-icons";

import {VimeoModal} from "../Modals/VimeoModal";

export const VimeoExtension = () => {

    const [modalActive, setModalActive] = useState(false);
    const player = useSelector(state => state.room.data.player);

    useEffect(() => {
        setModalActive(false);
    }, [player]);

    const handleModalActive = () => {
        setModalActive(!modalActive);
    };

    const handleVimeo = () => {
        setModalActive(!modalActive);
    };

    return (
        <>
            <div className="frame-item" data-tip data-for="frameVimeo" onClick={handleVimeo}>
                <FontAwesomeIcon icon={faVimeo}/>
            </div>
            <ReactTooltip id="frameVimeo" place="top" effect="solid">
                Vimeo
            </ReactTooltip>

            <VimeoModal onClose={handleModalActive} active={modalActive}/>
        </>
    );
};