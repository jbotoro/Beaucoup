import {connect} from 'react-redux';
import MyStuffButton from './mystuff_button'
import {createUserStuff, deleteUserStuff} from '../../actions/userstuff_actions'

const mapStateToProps = (state) => {
    let user_stuff;
    if (state.entities.users[Object.keys(state.entities.users)[0]].show_ids) {
        user_stuff = state.entities.users[Object.keys(state.entities.users)[0]].show_ids
    }
  
    return ({
        user_stuff: user_stuff
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        createUserStuff: (show) => dispatch(createUserStuff(show)),
        deleteUserStuff: (show) => dispatch(deleteUserStuff(show))
        //  add actions to add and remove from mystuff
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(MyStuffButton);