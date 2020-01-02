import React from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {openModal} from '../../actions/modal_actions'

class MastheadPlayButton extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            hover: false
        }

        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handlePlayVideo = this.handlePlayVideo.bind(this);
    }

    handleMouseEnter() {
        this.setState({
            hover: true
        })
    }

    handleMouseLeave(){
        this.setState({
            hover: false
        })
    }

    handlePlayVideo(){
        if(this.props.video) {
            let vidInfo = ["episode", this.props.video]
            this.props.openModal(vidInfo)
        }
    }








    render() {
        let icon = 'material-icons pl-1';
        if(this.state.hover){
            icon = 'material-icons pl-2'
        }
        
        
        return(
            <div className='Masthead-Play-Button-Container'  onClick = {this.handlePlayVideo}onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <div className={icon}>
                    play_circle_filled
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        openModal: modal => dispatch(openModal(modal))
    })
}

export default MastheadPlayButton = withRouter(connect(null,mapDispatchToProps)(MastheadPlayButton))