import React from 'react';
import {BrowserRouter} from "react-router-dom";

import './assets/sass/app.scss';
import './assets/base/bootstrap.min.css';

import Routes from "./Routes";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </div>
    );
};

export default App;
