import { userConstants } from '../constants/user.constants';

let user;
let storageUser = localStorage.getItem('user');
if(storageUser === 'string'){
    JSON.parse(storageUser);
}
else{ 
    user = null;
}
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action: any) {
    switch (action.type) {
    case userConstants.LOGIN_REQUEST:
        return {
        loggingIn: true,
        user: action.user
        };
    case userConstants.LOGIN_SUCCESS:
        return {
        loggedIn: true,
        user: action.user
        };
    case userConstants.LOGIN_FAILURE:
        return {
            error: "User credentials did not match"
        };
    case userConstants.LOGOUT:
        return {};
    default:
        return state
    }
}