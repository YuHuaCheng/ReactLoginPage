import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SkyLightStateless } from 'react-skylight';
import { toggleMessage } from '../actions/index';

class MessagePopup extends Component {
    constructor(props){
        super(props);

    }

    render() {
        const { toggleMessage, message } = this.props;
        const { message_visible } = this.props.messageStatus;

        const overlayStyles = {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 99,
            backgroundColor: 'rgba(0,0,0,0.1)'
        };

        const dialogStyles = {
            width: '35%',
            height: '300px',
            position: 'fixed',
            marginTop: '-170px',
            marginLeft: '-18%',
            backgroundColor: '#fff',
            borderRadius: '8px',
            zIndex: 100,
            padding: '15px',
            boxShadow: ''
        };

        const closeButtonStyle = {
            cursor: 'pointer',
            position: 'absolute',
            fontSize: '1.8em',
            right: '10px',
            top: '0',
            color: 'rgba(74,74,74,0.9)'
        };

        return (
            <div>
                <SkyLightStateless
                    isVisible={message_visible}
                    overlayStyles={overlayStyles}
                    dialogStyles={dialogStyles}
                    closeButtonStyle={closeButtonStyle}
                    onCloseClicked={() => {toggleMessage(false)}}
                    onOverlayClicked={() => {toggleMessage(false)}}
                    title=""
                >
                    <img src="../png/warning.png" height="60" width="60" />
                    <h2 className="message-title">Sorry</h2>
                    <div className="div-message">{message}</div>
                    <button type="button" className="btn btn-message-close" onClick={() => {toggleMessage(false)}}>Okay</button>
                </SkyLightStateless>
            </div>
        )
    }
}


function mapStateToProps({ messageStatus }) {
    return { messageStatus }
}

export default connect(mapStateToProps, { toggleMessage })(MessagePopup);