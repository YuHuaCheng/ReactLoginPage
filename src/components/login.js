import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { userLogin } from '../actions/index';
import { browserHistory } from 'react-router'

class Login extends Component {

    loginMessage(loginStatus){
        if (loginStatus === null){
            return null
        }
        return loginStatus ? null : <h3>Login information is not correct.</h3>;
    }

    createNewUser(){
        browserHistory.push('/new_user')
    }

    componentWillUpdate() {
        const { login_success } = this.props.loginStatus;
        if (login_success){
            browserHistory.push('/home');
        }
    }

    render() {
        const handleSubmit = this.props.handleSubmit;
        const { fields: { username, password }, userLogin } = this.props;
        const { login_success } = this.props.loginStatus;

        return (
            <form className="form-center" onSubmit={handleSubmit(userLogin)}>
                <h3>Login Page Project</h3>

                <div className="div-login">
                    <label>Username</label>
                    <input type="text" className="form-login" {...username} />
                </div>

                <div className="div-login">
                    <label>Password</label>
                    <input autoComplete="off" type="password" className="form-login" {...password} />
                    <div className="text-help">
                        {password.touched ? password.error : ''}
                    </div>
                </div>

                <div className="div-button">
                    <button type="submit" className="btn btn-login">Login</button>
                    <button type="submit" className="btn btn-new-user" onClick={this.createNewUser}>New User?</button>
                </div>

                <div className="div-message">
                    {this.loginMessage(login_success)}
                </div>
            </form>
        )

    }
}

function validate(values) {
    const errors = {};
    if (values.password && values.password.length < 4){
        errors.password = 'Passwords must contain at least 4 characters.'
    }

    return errors
}

function mapStateToProps({ loginStatus }) {
    return { loginStatus }
}

export default reduxForm({ // inject this object as props to Login component
    form: 'LoginForm',
    fields: ['username', 'password'],
    touchOnBlur: false,
    validate: validate
}, mapStateToProps, { userLogin })(Login);