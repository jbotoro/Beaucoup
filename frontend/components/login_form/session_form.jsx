import React from 'react';
import merge from 'lodash.merge';

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
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>
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
                    {this.props.formType} or {this.props.navLink}
                    <br />
                    {this.renderErrors()}

                    <div className='login-label-container'>
                        <label> Email:
                            <input
                                type="email"
                                value={this.state.email}
                            />
                        </label>
                        <br />
                        <label> Password:
                            <input
                                type="password"
                                value={this.state.password}
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

export default SessionForm;