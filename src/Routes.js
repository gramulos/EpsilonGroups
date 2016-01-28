import React from 'react';
import { ReactRouter, Router, Route, Link } from 'react-router';

import cTemplate from './pages/client/Template';
import cProducts from './pages/client/Products';
import cProductDetails from './pages/client/ProductDetails';
import cServices from './pages/client/Services';
import c3DPrinter from './pages/client/3dPrinter';

const Routes = (
    <Router>
        <Route path="/" component={cTemplate}>
            <Route path="products" component={cProducts} />
            <Route path="software" component={cProducts} />
            <Route path="software/:product" component={cProductDetails} />
            <Route path="hardware/:product" component={c3DPrinter} />
            <Route path="services" component={cServices} />
        </Route>
    </Router>
);

export default Routes;