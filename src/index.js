import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import routes from './Routes';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './pages/client/Template';

import 'bootstrap-webpack';
import 'normalize.css';
import 'file?name=[name].[ext]!../index.html';

injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(thunk, ReduxPromise)(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>{routes}</Provider>, document.getElementById('root'));
