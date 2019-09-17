import React from 'react';
import merge from 'lodash.merge';
import {withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        let user = merge({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    demoUser () {
        let user = { email:'demo@demo.com' , password:'password' }
        this.props.processForm(user).then(this.props.closeModal);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors() {
      
        return (
            <ul>
                {this.props.errors.map( (error, idx) => (
                    <li key={`${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className='login-form-parent'>
                <div className="modal-header">
                    <button className='modal-close-button' onClick={this.props.closeModal}> X </button>
                </div>
                <form onSubmit={this.handleSubmit} className='login-form'>
                   
                    
                    <div className='modal-login-container'>
                        <div className='modal-login-body'>
                            <div className='modal-welcome-message-container'>
                                {this.props.formType} to Beaucoup
                            </div>
                            <div className='modal-login-main'>
                                <div className='demo-user-button-div'>
                                    <button className='demo-user-button' onClick={this.demoUser}>Login Demo User</button>
                                </div>
                                <div className='modal-divider-div'>
                                    <div className='modal-divider-child'>or</div>
                                </div>
                                <div className='modal-login-form'>
                                    <div className='login-email-label'> EMAIL </div>
                                    <input
                                        className='login-input'
                                        type="email"
                                        placeholder='EMAIL'
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                    />
                                    <div className='login-password-label'>PASSWORD</div>
                                    <input
                                        className='login-input'
                                        type="password"
                                        placeholder="PASSWORD"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                    />
                                </div>
                                <div className='login-errors-messages'>{this.renderErrors()}</div>
                            
                                <input className="login-submit-button" type="submit" value={this.props.formType} />
                            </div>
                        </div>
                        <div className='modal-footer-divider-div'></div>
                        <div className='modal-footer-trial-message'> Don't have an account?&nbsp;
                            <a href="#" className='modal-footer-trial-link' onClick={this.props.otherForm}> Start your free trial</a>
                        </div>
                    </div>
                    <div className='modal-footer-container'></div>
                    
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);