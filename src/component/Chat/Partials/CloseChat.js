import * as React from 'react';

import {useDispatch} from "react-redux";

import ReactTooltip from "react-tooltip";
import {FiX} from 'react-icons/fi';

import {chatToggle} from "../../../redux/actions/global/globalAction";

export const CloseChat = () => {

    const dispatch = useDispatch();

    return (
        <div className="chat-close" onClick={() => dispatch(chatToggle(false))}>
            <FiX data-tip data-for="closeChat"/>
            <ReactTooltip id="closeChat" place="top" effect="solid">
                Close Chat
            </ReactTooltip>
        </div>
    );
};