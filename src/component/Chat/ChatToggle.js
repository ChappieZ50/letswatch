import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {FiMessageCircle} from "react-icons/fi";
import {chatToggle} from "../../redux/actions/global/globalAction";
import ReactTooltip from "react-tooltip";

export const ChatToggle = () => {

    const active = useSelector(state => state.global.chat_active);
    const dispatch = useDispatch();

    return (
        <>
            <div className="chat-toggle" onClick={() => dispatch(dispatch(chatToggle(!active)))} data-tip data-for="openChat">
                <FiMessageCircle size="35"/>
            </div>
            <ReactTooltip id="openChat" place="top" effect="solid">
                {
                    active ? 'Close Chat' : 'Open Chat'
                }
            </ReactTooltip>
        </>
    );
};