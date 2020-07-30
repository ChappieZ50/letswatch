import * as React from 'react';

import {useSelector} from "react-redux";

import {CloseChat} from "./Partials/CloseChat";
import {Owner} from "../Owner";

import avatarFemale from "../../assets/images/avatars/female.svg";
import avatarMale from "../../assets/images/avatars/male.svg";

export const Header = () => {
    const user = useSelector(state => state.room.user);
    return (
        <div className="chat-header">
            <div className="chat-header-info">
                <img src={user.gender === 'male' ? avatarMale : avatarFemale} className="chat-avatar rounded-circle rounded" alt="Chappie"/>
                <span className="chat-username">{user.username} {user.owner ? <Owner/> : ''}</span>
            </div>
            <CloseChat/>
        </div>
    );
};