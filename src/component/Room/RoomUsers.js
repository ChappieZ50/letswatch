import * as React from 'react';
import {useSelector} from "react-redux";

import avatarMale from "../../assets/images/avatars/male.svg";
import avatarFemale from "../../assets/images/avatars/female.svg";
import {Owner} from "../Owner";

export const RoomUsers = () => {

    const users = useSelector(state => state.room.data.users);

    return (
        <div className="users">
            {
                users.length > 0 ? users.map((value, key) => {
                    return (
                        <div className="user" key={key}>
                            <div className="user-avatar">
                                <img src={value.gender === 'male' ? avatarMale : avatarFemale} alt={value.username} className="img-fluid"/>
                            </div>
                            <div className="user-name">
                                <span>
                                    {value.username}
                                    {value.owner ? <Owner/> : ''}
                                </span>
                            </div>
                        </div>
                    );
                }) : ''
            }
        </div>
    );
};