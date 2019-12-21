import {connect} from 'react-redux';
import MyStuffButton from './mystuff_button'

const mapStateToProps = (state) => {
    let user_stuff = state.entities.users[Object.keys(state.entities.users)[0]].show_ids

    return ({
        // user_stuff = user_stuff
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        //  add actions to add and remove from mystuff
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(MyStuffButton);