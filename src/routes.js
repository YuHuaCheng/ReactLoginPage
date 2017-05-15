import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './components/app';
import Login from './components/login';
import NewUser from './components/new_user';
import HomePage from './components/homepage';

export default (
    <Route path="/" component={App}>
        <IndexRedirect to="login" />
        <Route path="login" component={Login} />
        <Route path="new_user" component={NewUser} />
        <Route path="home" component={HomePage} />
    </Route>
);