import axios from 'axios';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_CREATE = 'USER_CREATE';

const LOGIN_ROOT_URL = 'http://localhost:3000/login/find_user/';
const CREATE_ROOT_URL = 'http://localhost:3000/create/new_user';

export function userLogin(props) {
    const request = axios.get(`${LOGIN_ROOT_URL}${props.username}/${props.password}`);

    return {
        type: USER_LOGIN,
        payload: request
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
