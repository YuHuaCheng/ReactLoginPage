import axios from 'axios';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_CREATE = 'USER_CREATE';
export const USER_LOGOUT = 'USER_LOGOUT';
export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE';
export const IS_FETCHING = 'IS_FETCHING';

const ROOT_URL = `http://${location.hostname}:3000`;
const LOGIN_ROOT_URL = `${ROOT_URL}/login/find_user/`;
const CREATE_ROOT_URL = `${ROOT_URL}/create/new_user`;

export function userLogin({username, password}) {
    const request = axios.get(`${LOGIN_ROOT_URL}${username}/${password}`);

    return {
        type: USER_LOGIN,
        payload: request
    };
}

export function userLogout(){
    return {
        type: USER_LOGOUT
    };
}

export function userCreate({username, password}) {

    const data = {
        _id: username,
        password: password
    };

    const request = axios.post(CREATE_ROOT_URL, data);

    return {
        type: USER_CREATE,
        payload: request
    };
}

export function toggleMessage(isToggled){
    return {
        type: TOGGLE_MESSAGE,
        payload: isToggled
    };
}

export function fetchingData(isFetching){
    return {
        type: IS_FETCHING,
        payload: isFetching
    }
}
