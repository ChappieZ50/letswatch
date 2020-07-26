import * as React from 'react';

import {FiSend} from "react-icons/fi";
import ReactTooltip from "react-tooltip";

export const Footer = () => {
    return (
        <div className="chat-footer">
            <input type="text" className="form-control form-control-sm" name="chat_message" placeholder="Aa"/>
            <div className="chat-send">
                <FiSend  data-tip data-for="chatSendMessage"/>
                <ReactTooltip id="chatSendMessage" place="top" effect="solid">
                    Send Message
                </ReactTooltip>
            </div>
        </div>
    );
};