import React from 'react';
import { ReactRouter, Router, Route, Link } from 'react-router';

import cTemplate from './pages/client/Template';
import cProducts from './pages/client/Products';

const Routes = (
    <Router>
        <Route path="/" component={cTemplate}>
            <Route path="products" component={cProducts} />
        </Route>
    </Router>
);

export default Routes;