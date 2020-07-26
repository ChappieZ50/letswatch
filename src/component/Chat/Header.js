import * as React from 'react';

import {CloseChat} from "./Partials/CloseChat";

import avatarFemale from "../../assets/images/avatars/female.svg";

export const Header = () => {


    return (
        <div className="chat-header">
            <div className="chat-header-info">
                <img src={avatarFemale} className="chat-avatar rounded-circle rounded" alt="Chappie"/>
                <span className="chat-username">Chappie <span className="user-owner ml-1">(*)</span></span>
            </div>
            <CloseChat/>
        </div>
    );
};