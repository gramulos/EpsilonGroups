import { combineReducers } from 'redux';
import ClientMenuReducer from './reducer_client_menu';

const rootReducer = combineReducers({
    clientMenu: ClientMenuReducer
});

export default rootReducer;
