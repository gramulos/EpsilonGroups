import { combineReducers } from 'redux';
import ClientMenuReducer from './reducer_client_menu';
import ProductDetailsReducer from './reducer_product_details.js';

const rootReducer = combineReducers({
    clientMenu: ClientMenuReducer,
    productDetails: ProductDetailsReducer
});

export default rootReducer;
