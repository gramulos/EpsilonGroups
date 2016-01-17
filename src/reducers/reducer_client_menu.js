import { FETCH_CLIENT_MENU, RECEIVE_CLIENT_MENU } from '../actions/index';

export default function (state, action) {
    if(!state)
        state = {};

    switch (action.type) {
        case FETCH_CLIENT_MENU:
            return {
                ...state,
                isLoading: true
            };
        case RECEIVE_CLIENT_MENU:
            return {
                ...state,
                isLoading: false,
                menu: action.payload
            };
        default :
            return state;
    }
}