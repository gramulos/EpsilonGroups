import axios from 'axios';
import Firebse from 'firebase';

const ROOT_URL = 'https://epsilon-groups.firebaseio.com/';

export const FETCH_CLIENT_MENU = 'FETCH_CLIENT_MENU';
export const RECEIVE_CLIENT_MENU = 'RECEIVE_CLIENT_MENU';
export const ERROR_CLIENT_MENU = 'ERROR_CLIENT_MENU';

export const FETCH_PRODUCT_DETAILS = 'FETCH_PRODUCT_DETAILS';
export const RECEIVE_PRODUCT_DETAILS = 'RECEIVE_PRODUCT_DETAILS';
export const ERROR_PRODUCT_DETAILS = 'ERROR_PRODUCT_DETAILS';
export const ON_CHANGE_SUBJECT = 'ON_CHANGE_SUBJECT';

export function fetchMessageSubject(value) {
    console.log(value);
    return function(dispatch, getState) {
        return dispatch({
            type: ON_CHANGE_SUBJECT,
            payload: value
        });
    }
}

export function fetchProductDetails(productName) {
    const url = `${ROOT_URL}products/${productName}`;
    const request = new Firebase(url);

    return function(dispatch, getState) {

        request.on('value', function(product) {
            dispatch({
                type: RECEIVE_PRODUCT_DETAILS,
                payload: product.val()
            });
        });

        return dispatch({
            type: FETCH_PRODUCT_DETAILS
        });
    }
}

export function fetchClientMenu() {
    const url = `${ROOT_URL}siteMenu`;
    const request = new Firebase(url);

    return function(dispatch, getState) {

        request.on('value', function(menu) {
             dispatch({
                 type: RECEIVE_CLIENT_MENU,
                 payload: menu.val()
             });
        });

        return dispatch({
            type: FETCH_CLIENT_MENU
        });
    }
}