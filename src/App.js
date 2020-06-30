import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";

import {useLocalStorage} from "./hooks/useLocalStorage";

import Routes from "./Routes";

import PNotify from 'pnotify/dist/es/PNotify';

import 'pnotify/dist/PNotifyBrightTheme.css';
import './assets/sass/app.scss';
import './assets/base/bootstrap.min.css';

import { v4 as uuid } from 'uuid';

PNotify.defaults.delay = 2000;
PNotify.defaults.stack = {
    dir1: 'left',
    dir2: 'up',
    firstpos1: 25,
    firstpos2: 25,
    push: 'bottom',
    context: document.body
};


const App = () => {

    const [storageUser, setStorageUser] = useLocalStorage('user');

    if (!storageUser) {
        setStorageUser(uuid());
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </div>
    );
};

export default App;
