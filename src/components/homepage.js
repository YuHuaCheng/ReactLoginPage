import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { userLogout } from '../actions/index';

const HOMEPAGE_LOCAL_STORAGE = 'HOMEPAGE_LOCAL_STORAGE';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login_success: null,
            username: null
        };
    }

    backToLogin(login_success){
        if (login_success !== true) {browserHistory.push('/login')}
    }

    componentWillMount() {
        if (localStorage.getItem(HOMEPAGE_LOCAL_STORAGE)){
            const { login_success, username } = JSON.parse(localStorage.getItem(HOMEPAGE_LOCAL_STORAGE));
            this.backToLogin(login_success);
            this.setState({login_success, username});
        } else {
            const { login_success, username } = this.props.loginStatus;
            this.backToLogin(login_success);
            localStorage.setItem(HOMEPAGE_LOCAL_STORAGE, JSON.stringify({login_success, username}));
            this.setState({login_success, username});
        }
    }

    render() {
        const { username } = this.state;
        const { userLogout } = this.props;

        return (
            <div className="homepage">
                <div>Welcome to Home Page,<span className="homepage-user"> {username} </span></div>
                <div>
                    <button type="submit" className="btn btn-logout" onClick={userLogout}>
                        Log Out
                    </button>
                </div>
            </div>
        )
    }

    componentDidUpdate() {
        const { login_success } = this.props.loginStatus;
        this.backToLogin(login_success);
    }
}

function mapStateToProps({ loginStatus }) {
    return { loginStatus }
}

export default connect(mapStateToProps, { userLogout })(HomePage);