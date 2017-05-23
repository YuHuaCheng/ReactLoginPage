import { USER_CREATE, USER_LOGOUT } from '../actions';

const INITIAL_STATE = {
    create_success: null,
    username: null,
    message: ''
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type){
        case USER_CREATE:
            return {
                create_success: action.payload.data.success,
                username: action.payload.data.username,
                message: action.payload.data.message
            };
        case USER_LOGOUT:
            return INITIAL_STATE;
        default:
            return state
    }
}