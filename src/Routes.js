import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Landing from "./pages/Landing";
import {WatchTogether} from "./pages/WatchTogether";
import Layout from "./layout/Layout";
import {Discussions} from "./pages/Discussions";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Layout>
            <Route path="/watch-together" component={WatchTogether}/>
            <Route path="/discussions" component={Discussions}/>
        </Layout>
    </Switch>
);

export default Routes;