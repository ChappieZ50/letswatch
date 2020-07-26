import * as React from 'react';
import {useState, useEffect} from "react";

import avatarFemale from "../../assets/images/avatars/female.svg";
import {useSelector} from "react-redux";

export const Content = () => {

    const [scroll, setScroll] = useState(false);
    const active = useSelector(state => state.global.chat_active);

    useEffect(() => {
        if (!scroll && active) {
            const element = document.getElementById("chatContent");
            element.scrollTop = element.scrollHeight;
            setScroll(true);
        }
    }, [scroll,active]);

    return (
        <div className="chat-content" id="chatContent">
            <div className="chat-message">
                <div className="chat-message-user">
                    <div className="avatar">
                        <img src={avatarFemale} className="rounded-circle rounded" alt="Chappie"/>
                    </div>
                    <div className="message-section">
                        <div className="username">Chappie <span className="user-owner ml-1">(*)</span></div>
                        <div className="message">This is a example message. Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </div>
                    </div>
                </div>
            </div>

            <div className="chat-message chat-message-own">
                <div className="chat-message-user">
                    <div className="avatar">
                        <img src={avatarFemale} className="rounded-circle rounded" alt="Chappie"/>
                    </div>
                    <div className="message-section">
                        <div className="username">Chappie <span className="user-owner ml-1">(*)</span></div>
                        <div className="message">This is a example message. Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </div>
                    </div>
                </div>
            </div>
            <div className="chat-message chat-message-own">
                <div className="chat-message-user">
                    <div className="avatar">
                        <img src={avatarFemale} className="rounded-circle rounded" alt="Chappie"/>
                    </div>
                    <div className="message-section">
                        <div className="username">Chappie <span className="user-owner ml-1">(*)</span></div>
                        <div className="message">
                            Naber
                        </div>
                    </div>
                </div>
            </div>
            <div className="chat-message">
                <div className="chat-message-user">
                    <div className="avatar">
                        <img src={avatarFemale} className="rounded-circle rounded" alt="Chappie"/>
                    </div>
                    <div className="message-section">
                        <div className="username">Chappie <span className="user-owner ml-1">(*)</span></div>
                        <div className="message">İyi
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};