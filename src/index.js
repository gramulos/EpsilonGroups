import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from './Routes';

import 'bootstrap-webpack';
import 'normalize.css';

injectTapEventPlugin();

var routes = Routes;

ReactDOM.render(routes, document.getElementById('root'));
