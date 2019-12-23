import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {closeModal} from '../../actions/modal_actions';
import ShowDetails from './show_details';


const mapStateToProps = (state) => {
  
    return({
        state: state
    })
    
}

const mapDispatchToProps = (dispatch) => {
    return({
        closeModal: () => dispatch(closeModal())
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowDetails))