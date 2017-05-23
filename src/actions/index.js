import axios from 'axios';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_CREATE = 'USER_CREATE';
export const USER_LOGOUT = 'USER_LOGOUT';

const LOGIN_ROOT_URL = 'http://localhost:3000/login/find_user/';
const CREATE_ROOT_URL = 'http://localhost:3000/create/new_user';

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
        password: password,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    };

    const request = axios.post(CREATE_ROOT_URL, data);

    return {
        type: USER_CREATE,
        payload: request
    };
}
