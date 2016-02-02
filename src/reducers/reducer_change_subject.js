import { ON_CHANGE_SUBJECT } from '../actions/index';

export default function (state, action) {
    if(!state)
        state = {};

    switch (action.type) {
        case ON_CHANGE_SUBJECT:
            return {
                ...state,
                messageSubject: action.payload
            };
        default :
            return state;
    }
}