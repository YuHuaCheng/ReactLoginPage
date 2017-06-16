import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { browserHistory, Link } from 'react-router'

import { userLogin, toggleMessage, fetchingData } from '../actions/index';
import MessagePopup from './message';
import Loading from './loading';

class Login extends Component {

    componentWillMount() {
        const { toggleMessage } = this.props;
        toggleMessage(false) // by default turn off the message pop up
    }

    componentWillUpdate() {
        const { login_success } = this.props.loginStatus;
        const { submitting, toggleMessage, fetchingData} = this.props;
        if (login_success){
            browserHistory.push('/home');
        }

        if (submitting) {
            fetchingData(true);
            if ( login_success === false){
                toggleMessage(true)
            }
        }
    }

    render() {
        localStorage.clear(); // clear all localStorage whenever visiting here
        const handleSubmit = this.props.handleSubmit;
        const { fields: { username, password }, userLogin } = this.props;
        const { login_success } = this.props.loginStatus;
        const message = login_success ? '' :
            <p>
                Oops! User information is not correct. <br/>
                Please retry or click here to
                <Link to="/new_user" className=""> create a new user</Link>
                .
            </p>;

        return (
            <form className="form-center" onSubmit={handleSubmit(userLogin)}>
                <h3>Login Page Project</h3>

                <div className="div-login">
                    <label>Username</label>
                    <input type="text" className="form-login" {...username} />
                    <div className="text-help">
                        {username.touched ? username.error : ''}
                    </div>
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
                    <Link to="/new_user" className="btn btn-new-user">New User?</Link>
                </div>

                <div>
                    <MessagePopup message={message}/>
                </div>

                <div>
                    <Loading />
                </div>
            </form>
        )
    }

    componentDidUpdate() {
        this.props.fetchingData(false);
    }
}

function validate(values) {
    const errors = {};
    if (!values.username){
        errors.username = 'Please specify a username.'
    }

    if (!values.password ){
        errors.password = 'Please specify a password.'
    }

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
    validate: validate,
}, mapStateToProps, { userLogin, toggleMessage, fetchingData })(Login);