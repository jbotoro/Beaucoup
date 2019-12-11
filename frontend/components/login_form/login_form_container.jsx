import { connect } from 'react-redux';
import React from 'react';
import { login, removeErrors} from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: () => dispatch(openModal('signup')),
        closeModal: () => dispatch(closeModal()),
        demoLogin: (user) => dispatch(login(user)),
        removeErrors: () => dispatch(removeErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);