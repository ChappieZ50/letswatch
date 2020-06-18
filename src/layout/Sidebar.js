import * as React from 'react';

import {faHome, faUserFriends, faCommentDots} from '@fortawesome/free-solid-svg-icons'

import {SidebarGroup} from "../component/Partials/Sidebar/SidebarGroup";
import {SidebarItem} from "../component/Partials/Sidebar/SidebarItem";
import useSidebarToggle from "../hooks/useSidebarToggle";

const Sidebar = () => {
    const [active] = useSidebarToggle();

    return (
        <aside className={"sidebar" + (active ? " sidebar-active " : "")}>
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

export default Sidebar;