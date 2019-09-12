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
    }


    handleSubmit(e) {
        e.preventDefault();
        let user = merge({}, this.state);
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
                <form onSubmit={this.handleSubmit} className='login-form'>
                     Please {this.props.formType} 
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <br />
                    {this.renderErrors()}

                    <div className='login-label-container'>
                        <label> Email:
                            <input
                                type="email"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </label>
                        <br />
                        <label> Password:
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                        <br />
                        <input className="login-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);