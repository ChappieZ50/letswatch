import * as React from 'react';
import {useState, useEffect} from "react";

import {useSelector} from "react-redux";

import ReactTooltip from "react-tooltip";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDailymotion} from "@fortawesome/free-brands-svg-icons";

import {DailyMotionModal} from "../Modals/DailyMotionModal";

export const DailyMotionExtension = () => {

    const [modalActive, setModalActive] = useState(false);
    const player = useSelector(state => state.room.data.player);

    useEffect(() => {
        setModalActive(false);
    }, [player]);

    const handleModalActive = () => {
        setModalActive(!modalActive);
    };

    const handleDailyMotion = () => {
        setModalActive(!modalActive);
    };

    return (
        <>
            <div className="frame-item" data-tip data-for="frameDailyMotion" onClick={handleDailyMotion}>
                <FontAwesomeIcon icon={faDailymotion}/>
            </div>
            <ReactTooltip id="frameDailyMotion" place="top" effect="solid">
                DailyMotion
            </ReactTooltip>

            <DailyMotionModal onClose={handleModalActive} active={modalActive}/>
        </>
    );
};