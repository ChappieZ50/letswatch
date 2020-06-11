import * as React from 'react';
import {Link} from "react-router-dom";
import {Button} from "../component/Partials/Button";
import SidebarToggle from "../component/Partials/SidebarToggle";

export const Header = () => {
    return (
        <header>
            <SidebarToggle/>
            <div className="logo">
                <Link to="/"/>
            </div>
            <div className="header">
                <div className="user">
                    <Button className="bg-transparent">Sign In</Button>
                    <Button>Sign Up</Button>
                </div>
            </div>
        </header>
    );
};