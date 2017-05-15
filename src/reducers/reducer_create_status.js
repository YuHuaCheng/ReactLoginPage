import { USER_CREATE } from '../actions';

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
        default:
            return state
    }

}