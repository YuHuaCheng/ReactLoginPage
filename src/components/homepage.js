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

    componentWillMount() {
        if (localStorage.getItem(HOMEPAGE_LOCAL_STORAGE)){
            console.log('something in local storage');
            const {login_success, username} = JSON.parse(localStorage.getItem(HOMEPAGE_LOCAL_STORAGE));
            this.setState({login_success, username});
        } else {
            const { login_success } = this.props.loginStatus;
            const { username } = login_success ?  this.props.loginStatus : this.props.createStatus;
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
                    <button type="submit" className="btn btn-logout"
                            onClick={() => {
                                localStorage.removeItem(HOMEPAGE_LOCAL_STORAGE);
                                userLogout();
                            }}>
                        Log Out
                    </button>
                </div>
            </div>
        )
    }

    componentDidUpdate() {
        const { login_success } = this.props.loginStatus;
        const { create_success } = this.props.createStatus;
        if (login_success !== true && create_success !== true){
            browserHistory.push('/login');
        }
    }
}

function mapStateToProps({ loginStatus, createStatus }) {
    return { loginStatus, createStatus }
}

export default connect(mapStateToProps, { userLogout })(HomePage);