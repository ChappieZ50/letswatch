import * as React from 'react';
import {useSelector} from "react-redux";

import {Header} from "./Header";
import {Content} from "./Content";
import {Footer} from "./Footer";
import {ChatToggle} from "./ChatToggle";

export const Chat = () => {

    const active = useSelector(state => state.global.chat_active);

    return (
        <>
            <div className={"chat" + (active ? '  chat-active' : '')}>
                <Header/>
                <Content/>
                <Footer/>
            </div>
            <ChatToggle/>
        </>
    );
};
