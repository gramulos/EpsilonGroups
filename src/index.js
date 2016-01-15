import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from './Routes';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import App from './components/App';

import 'bootstrap-webpack';
import 'normalize.css';

injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

var routes = Routes;

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>routes</Provider>, document.getElementById('root'));
