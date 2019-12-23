import React from 'react';
import { closeModal, openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../login_form/login_form_container';
import SignupFormContainer from '../login_form/signup_form_container';
import {removeErrors} from '../../actions/session_actions'
import VideoPlayer from '../video_player_modal/video_player_container';


// // function Modal({ modal, closeModal }) {
//     if (!modal) {
//         return null;
//     }

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: false
        }

        this.handleClose = this.handleClose.bind(this)
    }

    componentDidUpdate() {


        if (this.state.content === false && this.props.modal !== null) {
            setTimeout(() => {
                this.setState({ content: true });
            }, 200);
        }

        if (this.props.modal === null && this.state.content !== false) {
            this.setState({ content: false })
        }
    }

    handleClose() {
        this.props.closeModal()
        this.props.removeErrors()
       
    }

    render() {
            let component = null;
            
            
            if(Array.isArray(this.props.modal) && this.props.modal[0] ==='episode'){
                return(
                    <VideoPlayer video={this.props.modal[1]}/>
                )
            } else if (Array.isArray(this.props.modal) && this.props.modal[0] === 'showdetails') {
                return(
                    <DetailsPage show={this.props.modal[1]}/>
                )
            } else {
                component;
                switch (this.props.modal) {
                case 'login':
                    component = <LoginFormContainer />
                    break
                case 'signup':
                    component = <SignupFormContainer />
                    break
                default:

                    return null;
                }
            }
        


        let modalchild = "modal-child";
        if (this.state.content === true) {
            modalchild = "modal-child2";
        }


        return (
            <div className="modal-background" onClick={this.handleClose}>
                <div className={modalchild} onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        )
    }

}



const mapStateToProps = (state, ownProps) => {
    return ({
        modal: state.ui.modal
    });
};

const mapDispatchToProps = (dispatch) => {

    return ({
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal)),
        removeErrors: () => dispatch(removeErrors())
    });

};


export default connect(mapStateToProps, mapDispatchToProps)(Modal);