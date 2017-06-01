import { USER_LOGIN, USER_LOGOUT } from '../actions';

const INITIAL_STATE = {
    login_success: null,
    username: null
};

const LOGOUT_STATE = {
    login_success: null,
    username: ''
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type){
        case USER_LOGIN:
            return {
                login_success: action.payload.data.success,
                username: action.payload.data.username
            };
        case USER_LOGOUT:
            return LOGOUT_STATE;
        default:
            return state
    }

}