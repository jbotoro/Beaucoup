import { connect } from 'react-redux';
import showItem from './show_item';


const mapStateToProps = state => ({
    state: state
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(showItem)