import * as React from 'react';

import avatarMale from "../../assets/images/avatars/male.svg";
import avatarFemale from "../../assets/images/avatars/female.svg";
import {useSelector} from "react-redux";

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
                                    {value.owner ? <span className="user-owner ml-1">(*)</span> : ''}
                                </span>
                            </div>
                        </div>
                    );
                }) : ''
            }
        </div>
    );
};