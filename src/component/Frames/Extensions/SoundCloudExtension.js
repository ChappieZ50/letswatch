import * as React from 'react';
import {useState, useEffect} from "react";

import {useSelector} from "react-redux";

import ReactTooltip from "react-tooltip";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSoundcloud} from "@fortawesome/free-brands-svg-icons";
import {SoundCloudModal} from "../Modals/SoundCloudModal";

export const SoundCloudExtension = () => {

    const [modalActive, setModalActive] = useState(false);
    const player = useSelector(state => state.room.data.player);

    useEffect(() => {
        setModalActive(false);
    }, [player]);

    const handleModalActive = () => {
        setModalActive(!modalActive);
    };

    const handleSoundCloud = () => {
        setModalActive(!modalActive);
    };

    return (
        <>
            <div className="frame-item" data-tip data-for="frameSoundCloud" onClick={handleSoundCloud}>
                <FontAwesomeIcon icon={faSoundcloud}/>
            </div>
            <ReactTooltip id="frameSoundCloud" place="top" effect="solid">
                Sound Cloud
            </ReactTooltip>

            <SoundCloudModal onClose={handleModalActive} active={modalActive}/>
        </>
    );
};