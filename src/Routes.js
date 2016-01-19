import React from 'react';
import { ReactRouter, Router, Route, Link } from 'react-router';

import cTemplate from './pages/client/Template';
import cProducts from './pages/client/Products';
import cProductDetails from './pages/client/ProductDetails';

const Routes = (
    <Router>
        <Route path="/" component={cTemplate}>
            <Route path="products" component={cProducts} />
            <Route path="software" component={cProducts} />
            <Route path="software/vt" component={cProductDetails} />
        </Route>
    </Router>
);

export default Routes;