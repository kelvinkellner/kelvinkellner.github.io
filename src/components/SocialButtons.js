import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';

class SocialButtons extends Component { 
    render() {
        const iconSize = this.props.iconSize === undefined ? 24 : this.props.iconSize;
        const shiftDown = this.props.shiftDown === undefined ? "0px" : this.props.shiftDown + "px";
        return(
            <Row style={this.props.style}>
                <ul className="nav" style={{width: "100%", display: "flex", justifyContent: (this.props.justifyContent === undefined ? "center" : this.props.justifyContent)}}>
                    <a href="https://www.linkedin.com/in/kelvinkellner/" rel="noreferrer" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" style={{margin: "0 -8px 0 0"}}>
                        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg></a>
                        <li className="nav-item" style={{marginTop: shiftDown}}><a href="https://www.linkedin.com/in/kelvinkellner/" rel="noreferrer" target="_blank">LinkedIn</a></li>
                    <a href="https://github.com/kelvinkellner" rel="noreferrer" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" style={{margin: "0 -8px 0 24px"}}>
                        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/></svg></a>
                        <li className="nav-item" style={{marginTop: shiftDown}}><a href="https://github.com/kelvinkellner" rel="noreferrer" target="_blank">GitHub</a></li>
                    <a href="https://instagram.com/k.godless/" rel="noreferrer" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" style={{margin: "0 -8px 0 24px"}}>
                        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.615 6h-9.23c-.766 0-1.385.62-1.385 1.384v9.23c0 .766.619 1.386 1.385 1.386h9.23c.766 0 1.385-.62 1.385-1.385v-9.23c0-.765-.619-1.385-1.385-1.385zm-4.615 3.693c1.274 0 2.309 1.032 2.309 2.307s-1.035 2.307-2.309 2.307-2.307-1.033-2.307-2.307 1.033-2.307 2.307-2.307zm4.5 6.346c0 .255-.207.461-.461.461h-8.078c-.254 0-.461-.207-.461-.461v-5.039h.949c-.045.158-.078.32-.102.486-.023.168-.038.339-.038.514 0 2.04 1.652 3.693 3.691 3.693s3.691-1.653 3.691-3.693c0-.174-.015-.346-.039-.514-.023-.166-.058-.328-.102-.486h.95v5.039zm0-6.991c0 .255-.207.462-.461.462h-1.088c-.256 0-.461-.208-.461-.462v-1.087c0-.255.205-.461.461-.461h1.088c.254 0 .461.207.461.461v1.087z"/></svg></a>
                        <li className="nav-item" style={{marginTop: shiftDown}}><a href="https://instagram.com/k.godless/" rel="noreferrer" target="_blank">Instagram</a></li>
                    <a href="mailto:kelvinkellner123@gmail.com" rel="noreferrer" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" style={{margin: "0 -8px 0 24px"}}>
                        <path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z"/></svg></a>
                        <li className="nav-item" style={{marginTop: shiftDown}}><a href="mailto:kelvinkellner123@gmail.com" rel="noreferrer" target="_blank">Email</a></li>
                </ul>
            </Row>
        );
    }
}

export default SocialButtons;