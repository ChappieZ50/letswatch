import * as React from 'react';
import {Header} from "./Header";
import {Sidebar} from "./Sidebar";

export const Layout = ({children}) => {
    return (
        <main className="wrapper">
            <Header/>
            <div className="wrapper-inner">
                <Sidebar/>
                <div className="page-content">
                    {children}
                </div>
            </div>
        </main>
    );
};