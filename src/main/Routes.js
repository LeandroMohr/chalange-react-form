import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home/Home';
import FormProfile from '../pages/FormProfile/FormProfile';
import Profile from '../pages/Profile/Profile';
import NoMatch from '../pages/NoMatch/NoMatch';
import Sucess from '../pages/Sucess/Sucess';

export class Routes extends Component {
    render() {
        return (
            <main className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/formprofile" component={FormProfile} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/sucess" component={Sucess} />
                    {/* when none of the above match, <NoMatch> will be rendered */}
                    <Route component={NoMatch} />
                </Switch>
            </main>
        )
    }
};

export default Routes;