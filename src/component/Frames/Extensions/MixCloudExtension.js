import * as React from 'react';
import {useState, useEffect} from "react";

import {useSelector} from "react-redux";

import ReactTooltip from "react-tooltip";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMixcloud} from "@fortawesome/free-brands-svg-icons";
import {MixCloudModal} from "../Modals/MixCloudModal";


export const MixCloudExtension = () => {

    const [modalActive, setModalActive] = useState(false);
    const player = useSelector(state => state.room.data.player);

    useEffect(() => {
        setModalActive(false);
    }, [player]);

    const handleModalActive = () => {
        setModalActive(!modalActive);
    };

    const handleMixCloud = () => {
        setModalActive(!modalActive);
    };

    return (
        <>
            <div className="frame-item" data-tip data-for="frameMixCloud" onClick={handleMixCloud}>
                <FontAwesomeIcon icon={faMixcloud}/>
            </div>
            <ReactTooltip id="frameMixCloud" place="top" effect="solid">
                Mix Cloud
            </ReactTooltip>

            <MixCloudModal onClose={handleModalActive} active={modalActive}/>
        </>
    );
};