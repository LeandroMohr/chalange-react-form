import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './../components/Home';
import Profile from './../components/Profile';
import EditProfile from './../components/EditProfile';
import NoMatch from './../components/NoMatch';

export class Routes extends Component {
    render() {
        return (
            <main className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/editProfile" component={EditProfile} />
                    {/* when none of the above match, <NoMatch> will be rendered */}
                    <Route component={NoMatch} />
                </Switch>
            </main>
        )
    }
};

export default Routes;