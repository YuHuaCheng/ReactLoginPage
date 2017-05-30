import React, { Component } from 'react';
import { connect } from 'react-redux';

class Loading extends Component {
    render() {
        const { is_fetching } = this.props.fetchingStatus;
        return is_fetching ? <div>Loading...</div> : <div></div>
    }
}


function mapStateToProps({ fetchingStatus }) {
    return { fetchingStatus }
}

export default connect(mapStateToProps)(Loading);