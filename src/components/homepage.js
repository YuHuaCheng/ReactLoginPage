import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { userLogout } from '../actions/index';

class HomePage extends Component {

    componentDidUpdate() {
        const { login_success } = this.props.loginStatus;
        const { create_success } = this.props.createStatus;
        if (login_success != true && create_success != true){
            browserHistory.push('/login');
        }
    }

    render() {
        const { login_success } = this.props.loginStatus;
        const { userLogout } = this.props;
        const { username } = login_success ?  this.props.loginStatus : this.props.createStatus;

        return (
            <div className="homepage">
                <div>Welcome to Home Page,<span className="homepage-user"> {username} </span></div>
                <div>
                    <button type="submit" className="btn btn-logout" onClick={userLogout}>Log Out</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ loginStatus, createStatus }) {
    return { loginStatus, createStatus }
}

export default connect(mapStateToProps, { userLogout })(HomePage);