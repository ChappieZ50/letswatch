import * as React from 'react';


import {FiMessageCircle,FiUsers,FiHome} from "react-icons/fi";

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
                        <SidebarItem to="/">
                            <FiHome size="22px" className="mr-3"/>
                            Home
                        </SidebarItem>
                        <SidebarItem to="/watch-together">
                            <FiUsers size="22px" className="mr-3"/>
                            Watch Together
                        </SidebarItem>
                        <SidebarItem to="/discussions">
                            <span><FiMessageCircle/></span>
                            Discussions
                        </SidebarItem>
                    </SidebarGroup>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;