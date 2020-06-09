import * as React from 'react';
import { faHome,faUserFriends,faCommentDots } from '@fortawesome/free-solid-svg-icons'

import {SidebarGroup} from "../component/Partials/SidebarGroup";
import {SidebarItem} from "../component/Partials/SidebarItem";

export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="scroll-wrapper">
                <div className="sidebar-inner">
                    <SidebarGroup title={'Menu'}>
                        <SidebarItem to="/" icon={faHome}>
                            Home
                        </SidebarItem>
                        <SidebarItem to="/watch-together" icon={faUserFriends}>
                            Watch Together
                        </SidebarItem>
                        <SidebarItem to="/discussions" icon={faCommentDots}>
                            Discussions
                        </SidebarItem>
                    </SidebarGroup>
                </div>
            </div>
        </aside>
    );
};