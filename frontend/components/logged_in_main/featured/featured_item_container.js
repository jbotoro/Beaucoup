import { connect } from 'react-redux';
import featuredItem from './featured_item';


const mapStateToProps = state => ({
    state: state
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(featuredItem)