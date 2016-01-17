import axios from 'axios';
import Firebse from 'firebase';

const ROOT_URL = 'https://epsilon-groups.firebaseio.com/';

export const FETCH_CLIENT_MENU = 'FETCH_CLIENT_MENU';
export const RECEIVE_CLIENT_MENU = 'RECEIVE_CLIENT_MENU';
export const ERROR_CLIENT_MENU = 'ERROR_CLIENT_MENU';

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