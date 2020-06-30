import * as React from 'react';

import avatarMale from "../../assets/images/avatars/male.svg";
import avatarFemale from "../../assets/images/avatars/female.svg";

export const RoomUsers = () => {
    return (
        <div className="users">
            <div className="user">
                <div className="user-avatar">
                    <img src={avatarMale} alt="user-avatar" className="img-fluid"/>
                </div>
                <div className="user-name">
                    <span>Chappie1 <span className="user-owner">(*)</span></span>
                </div>
            </div>
            <div className="user">
                <div className="user-avatar">
                    <img src={avatarFemale} alt="user-avatar" className="img-fluid"/>
                </div>
                <div className="user-name">
                    <span>Chappie2</span>
                </div>
            </div>

            <div className="user">
                <div className="user-avatar">
                    <img src={avatarFemale} alt="user-avatar" className="img-fluid"/>
                </div>
                <div className="user-name">
                    <span>Chappie3</span>
                </div>
            </div>
            <div className="user">
                <div className="user-avatar">
                    <img src={avatarFemale} alt="user-avatar" className="img-fluid"/>
                </div>
                <div className="user-name">
                    <span>Chappie4</span>
                </div>
            </div>
            <div className="user">
                <div className="user-avatar">
                    <img src={avatarFemale} alt="user-avatar" className="img-fluid"/>
                </div>
                <div className="user-name">
                    <span>Chappie5</span>
                </div>
            </div>
            <div className="user">
                <div className="user-avatar">
                    <img src={avatarFemale} alt="user-avatar" className="img-fluid"/>
                </div>
                <div className="user-name">
                    <span>Chappie6</span>
                </div>
            </div>
            <div className="user">
                <div className="user-avatar">
                    <img src={avatarFemale} alt="user-avatar" className="img-fluid"/>
                </div>
                <div className="user-name">
                    <span>Chappie7</span>
                </div>
            </div>
            <div className="user">
                <div className="user-avatar">
                    <img src={avatarFemale} alt="user-avatar" className="img-fluid"/>
                </div>
                <div className="user-name">
                    <span>Chappie8</span>
                </div>
            </div>
            <div className="user">
                <div className="user-avatar">
                    <img src={avatarFemale} alt="user-avatar" className="img-fluid"/>
                </div>
                <div className="user-name">
                    <span>Chappie9</span>
                </div>
            </div>
            <div className="user">
                <div className="user-avatar">
                    <img src={avatarFemale} alt="user-avatar" className="img-fluid"/>
                </div>
                <div className="user-name">
                    <span>Chappie10</span>
                </div>
            </div>
            <div className="user">
                <div className="user-avatar">
                    <img src={avatarFemale} alt="user-avatar" className="img-fluid"/>
                </div>
                <div className="user-name">
                    <span>Chappie11</span>
                </div>
            </div>
            <div className="user">
                <div className="user-avatar">
                    <img src={avatarFemale} alt="user-avatar" className="img-fluid"/>
                </div>
                <div className="user-name">
                    <span>Chappie12</span>
                </div>
            </div>
        </div>
    );
};