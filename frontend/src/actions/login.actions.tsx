import { userConstants } from '../constants/user.constants';
import { alertActions } from './alert.actions';
import {authenticationService} from '../components/login/login.service'
import { Dispatch } from 'redux';
import { history } from '../helpers/history';

export const userActions = {
    login,
    logout,
    register
};

function login(username: any, password: any) {
    return (dispatch: Dispatch) => {
        dispatch(request({ username }));

        authenticationService.login({username: username, password: password})
            .then(
                user => { 
                    history.push('/');
                    Object.assign(user, user.user)
                    user.user = null;                    
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            )
    };

    function request(user: any) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user: any) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error: any) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function register(user: any) {
    return (dispatch: Dispatch) => {
        dispatch(request({ user }));

        authenticationService.register(user)
            .then(
                user => { 
                    history.push('/');
                    console.log("USER: " + user);                    
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            )
    };

    function request(user: any) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user: any) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error: any) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    authenticationService.logout();
    return { type: userConstants.LOGOUT };
}
