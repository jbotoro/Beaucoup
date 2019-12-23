import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {openModal} from '../../../actions/modal_actions';
import DetailsShowItem from './details_show_item'

const mapStateToProps = (state) => {
    return ({
        state: state
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        openModal: (modal) => dispatch(openModal(modal))
    })
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DetailsShowItem))