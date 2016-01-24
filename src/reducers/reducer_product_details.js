import { FETCH_PRODUCT_DETAILS, RECEIVE_PRODUCT_DETAILS } from '../actions/index';

export default function (state, action) {
    if(!state)
        state = {};

    switch (action.type) {
        case FETCH_PRODUCT_DETAILS:
            return {
                ...state,
                isLoading: true
            };
        case RECEIVE_PRODUCT_DETAILS:
            return {
                ...state,
                isLoading: false,
                productDetails: action.payload
            };
        default :
            return state;
    }
}