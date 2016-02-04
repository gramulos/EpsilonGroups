import { SEND_EMAIL } from '../actions/index';

export default function (state, action) {
    if(!state)
        state = {};

    switch (action.type) {
        case SEND_EMAIL:
            return {
                ...state
            };
        default :
            return state;
    }
}