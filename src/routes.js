import React from 'react';
import{ Route, IndexRoute } from 'react-router';

import App from './components/app';
import Hello from './components/showTodos';
import Login from './components/login';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={Login} />
        <Route path="hello" component={Hello} />
    </Route>
    );