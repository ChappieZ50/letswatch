import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./layout/SinglePage/Home";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Routes;