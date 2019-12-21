import {connect} from 'react-redux'
import DetailsButton from './details_button'

const mapDispatchToProps =  (dispatch) => {
    // add modal action here later
    openModal: []
}

export default connect(null, mapDispatchToProps)(DetailsButton)