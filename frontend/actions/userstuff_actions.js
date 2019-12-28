
import * as Util from '../util/mystuff_api_util';

export const ADD_USER_STUFF = 'ADD_USER_STUFF';
export const REMOVE_USER_STUFF = "REMOVE_USER_STUFF";

const receiveUserStuff = (my_show) => ({
    type: ADD_USER_STUFF,
    my_show: my_show
})

const removeUserStuff = (my_show) => ({
    type: REMOVE_USER_STUFF,
    my_show: my_show
})

export const createUserStuff = (show_id) => dispatch => {
    return (
        Util.addMyStuff(show_id).then((my_show) => dispatch(receiveUserStuff(my_show)))
    )
}

export const deleteUserStuff = (show_id) => dispatch => (
    Util.removeMyStuff(show_id).then((my_show) => dispatch(removeUserStuff(my_show)))
)