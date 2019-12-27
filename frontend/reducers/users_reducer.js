import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {ADD_USER_STUFF, REMOVE_USER_STUFF} from '../actions/userstuff_actions';
import merge from 'lodash.merge';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge(
                {}, state, { [action.currentUser.id]: action.currentUser }
            )
        case ADD_USER_STUFF:
            let addState = merge({}, state)
            addState[Object.keys(action.show)].show_ids.push(action.show[Object.keys(action.show)].show_id)
            return merge( {}, addState)
        case REMOVE_USER_STUFF:
            let removeState = merge({}, state)
            let stuffArray = removeState[Object.keys(action.show)[0]].show_ids.filter((nums) => nums !== (action.show[1].show_id))
            removeState[Object.keys(action.show)[0]].show_ids = stuffArray
            return merge({}, removeState)
        default:
            return state;
    }
};


export default usersReducer;