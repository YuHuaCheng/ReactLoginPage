import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { browserHistory, Link } from 'react-router'

import { userCreate, toggleMessage } from '../actions/index';
import MessagePopup from './message';

class NewUser extends Component {

    componentWillMount() {
        const { toggleMessage } = this.props;
        toggleMessage(false) // by default turn off the message pop up
    }

    componentWillUpdate() {
        const { create_success } = this.props.createStatus;
        if (create_success){
            browserHistory.push('/home');
        }

        const { submitting, toggleMessage } = this.props;
        if (submitting && create_success === false){
            toggleMessage(true)
        }
    }

    render() {
        const handleSubmit = this.props.handleSubmit;
        const { fields: { username, password, reType }, userCreate } = this.props;
        const { create_success } = this.props.createStatus;

        const message = create_success ? '' :
            <p>
                Oops! Username <span className="message-username">{username.value}</span> has existed. <br/>
                Please come up with a different one.
            </p>;

        return (
            <form className="form-center" onSubmit={handleSubmit(userCreate)}>
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

                <div className="div-login">
                    <label className="label-retype">Re-enter</label>
                    <input autoComplete="off" type="password" className="form-login" {...reType} />
                    <div className="text-help text-help-retype">
                        {reType.touched ? reType.error : ''}
                    </div>
                </div>

                <div className="div-button">
                    <button type="submit" className="btn btn-login">Submit</button>
                    <Link to="/login" className="btn btn-new-user">Have an account?</Link>
                </div>

                <div>
                    <MessagePopup message={message}/>
                </div>
            </form>
        )

    }
}

function validate(values) {
    const errors = {};
    if (!values.username){
        errors.username = 'Please specify a username.'
    }

    if (!values.password){
        errors.password = 'Please specify the password.'
    }
    if (values.password && values.password.length < 4){
        errors.password = 'Passwords must contain at least 4 characters.'
    }
    if (values.password && values.password != values.reType){
        errors.reType = 'Please re-type your password correctly.'
    }

    return errors
}

function mapStateToProps({ createStatus }) {
    return { createStatus }
}

export default reduxForm({ // inject this object as props to Login component
    form: 'CreateForm',
    fields: ['username', 'password', 'reType'],
    validate: validate
}, mapStateToProps, { userCreate, toggleMessage })(NewUser);