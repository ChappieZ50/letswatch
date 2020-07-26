import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {FiMessageCircle} from "react-icons/fi";
import {chatToggle} from "../../redux/actions/global/globalAction";

export const ChatToggle = () => {

    const active = useSelector(state => state.global.chat_active);
    const dispatch = useDispatch();

    return (
        <div className="chat-toggle" onClick={() => dispatch(dispatch(chatToggle(!active)))}>
            <FiMessageCircle size="35"/>
        </div>
    );
};