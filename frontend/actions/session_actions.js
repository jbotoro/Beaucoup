export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
import * as APIUtil from '../util/session_api_util';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});
export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});
export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors.responseJSON
});


export const login = formUser => dispatch => (
    APIUtil.signup(formUser)
        .then(user => (dispatch(receiveCurrentUser(user)))
        .fail(errors => (dispatch(receiveErrors(errors))))
));

export const logout = () => dispatch => (
    APIUtil.logout()
        .then(user => (dispatch(logoutCurrentUser())))
);

export const signup = formUser => dispatch => (
    APIUtil.signup(formUser)
        .then(user => (dispatch(receiveCurrentUser(user))))
        .fail(errors => (dispatch(receiveErrors(errors))))
);
