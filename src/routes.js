import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Test from './containers/test';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Test}>

        </IndexRoute>
    </Route>
);
