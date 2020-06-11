import * as React from 'react';

import {Header} from "./Header";
import {Overlay} from "../component/Partials/Overlay";

import Sidebar from "./Sidebar";
import useSidebarToggle from "../hooks/useSidebarToggle";

const Layout = ({children}) => {
    const [active, setActive] = useSidebarToggle();

    return (
        <main className="wrapper">
            <Header/>
            <div className="wrapper-inner">
                <Sidebar/>
                <div className="page-content" onClick={() => active ? setActive(false) : ""}>
                    <Overlay active={active}/>
                    {children}
                </div>
            </div>
        </main>
    );
};

export default Layout;