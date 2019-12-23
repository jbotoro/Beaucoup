import {connect} from 'react-redux'
import DetailsButton from './details_button'
import {openModal} from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom'

const mapDispatchToProps =  (dispatch) => {
    return({
        openModal: (modal) => dispatch(openModal(modal))
    })
   
}

export default withRouter(connect(null, mapDispatchToProps)(DetailsButton))