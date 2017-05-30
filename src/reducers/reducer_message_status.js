import { TOGGLE_MESSAGE } from '../actions';

const INITIAL_STATE = {
    message_visible: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case TOGGLE_MESSAGE:
            return {
                message_visible: action.payload
            };
        default:
            return state
    }
}