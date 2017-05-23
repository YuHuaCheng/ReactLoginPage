import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { userCreate } from '../actions/index';
import { browserHistory } from 'react-router'

class NewUser extends Component {

    createMessage(createStatus, message){
        if (createStatus === null){
            return null
        }
        return createStatus ? null : <h3>{message}</h3>;
    }

    componentWillUpdate() {
        const { create_success } = this.props.createStatus;
        if (create_success){
            browserHistory.push('/home');
        }
    }

    render() {
        const handleSubmit = this.props.handleSubmit;
        const { fields: { username, password, reType }, userCreate } = this.props;
        const { create_success, message } = this.props.createStatus;

        return (
            <form className="form-center" onSubmit={handleSubmit(userCreate)}>
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

                <div className="div-login">
                    <label className="label-retype">Re-enter</label>
                    <input autoComplete="off" type="password" className="form-login" {...reType} />
                    <div className="text-help text-help-retype">
                        {reType.touched ? reType.error : ''}
                    </div>
                </div>

                <div className="div-button">
                    <button type="submit" className="btn btn-login">Submit</button>
                </div>

                <div>
                    {this.createMessage(create_success, message)}
                </div>

            </form>
        )

    }
}

function validate(values) {
    const errors = {};
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
    touchOnBlur: false,
    validate: validate
}, mapStateToProps, { userCreate })(NewUser);