import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

class HomePage extends Component {
    render() {
        const { login_success } = this.props.loginStatus;
        const { create_success } = this.props.createStatus;
        const { username } = login_success ?  this.props.loginStatus : this.props.createStatus;

        if (!login_success && !create_success){
            browserHistory.push('/login');
        }

        return (
            <div className="homepage">Welcome to Home Page,
                <span className="homepage-user"> {username} </span>
            </div>
        )
    }
}

function mapStateToProps({ loginStatus, createStatus }) {
    return { loginStatus, createStatus }
}

export default connect(mapStateToProps, null)(HomePage);