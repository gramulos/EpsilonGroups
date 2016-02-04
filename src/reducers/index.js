import { combineReducers } from 'redux';
import ClientMenuReducer from './reducer_client_menu';
import ProductDetailsReducer from './reducer_product_details.js';
import ChangeSubject from './reducer_change_subject.js';
import {reducer as formReducer} from 'redux-form';
import sendEmail from './reducer_send_email.js';

const rootReducer = combineReducers({
    clientMenu: ClientMenuReducer,
    productDetails: ProductDetailsReducer,
    changeSubject: ChangeSubject,
    form: formReducer,
    sendEmail: sendEmail
});

export default rootReducer;
