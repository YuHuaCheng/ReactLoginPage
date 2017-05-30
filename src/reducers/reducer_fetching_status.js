import { IS_FETCHING } from '../actions';

const INITIAL_STATE = {
    is_fetching: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case IS_FETCHING:
            return {
                is_fetching: action.payload
            };
        default:
            return state
    }
}