import * as React from 'react';
import {useState,useEffect} from "react";

import {useSelector} from "react-redux";

import ReactTooltip from "react-tooltip";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {YoutubeModal} from "../Modals/YoutubeModal";

export const YoutubeExtension = () => {

    const [modalActive, setModalActive] = useState(false);
    const player = useSelector(state => state.room.data.player);

    useEffect(() => {
        setModalActive(false);
    }, [player]);

    const handleModalActive = () => {
        setModalActive(!modalActive);
    };

    const handleYoutube = () => {
        setModalActive(!modalActive);
    };

    return (
        <>
            <div className="frame-item" data-tip data-for="frameYoutube" onClick={handleYoutube}>
                <FontAwesomeIcon icon={faYoutube}/>
            </div>
            <ReactTooltip id="frameYoutube" place="top" effect="solid">
                Youtube
            </ReactTooltip>
            <YoutubeModal onClose={handleModalActive} active={modalActive}/>
        </>
    );
};