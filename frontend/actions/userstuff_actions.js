
import * as Util from '../util/mystuff_api_util';

export const ADD_USER_STUFF = 'ADD_USER_STUFF';
export const REMOVE_USER_STUFF = "REMOVE_USER_STUFF";

const receiveUserStuff = (show) => ({
    type: ADD_USER_STUFF,
    show: show
})

const removeUserStuff = (show) => ({
    type: REMOVE_USER_STUFF,
    show: show
})

export const createUserStuff = (show_id) => dispatch => {
    return (
        Util.addMyStuff(show_id).then((show) => dispatch(receiveUserStuff(show)))
    )
}

export const deleteUserStuff = (show-Id) => dispatch => (
    Util.removeMyStuff(show_id).then((show) => dispatch(removeUserStuff(show)))
)