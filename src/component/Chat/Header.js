import * as React from 'react';

import {CloseChat} from "./Partials/CloseChat";

import avatarFemale from "../../assets/images/avatars/female.svg";
import {Owner} from "../Owner";

export const Header = () => {


    return (
        <div className="chat-header">
            <div className="chat-header-info">
                <img src={avatarFemale} className="chat-avatar rounded-circle rounded" alt="Chappie"/>
                <span className="chat-username">Chappie <Owner/></span>
            </div>
            <CloseChat/>
        </div>
    );
};