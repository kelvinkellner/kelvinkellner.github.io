import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import SocialButtons from './SocialButtons';

class Footer extends Component {
    render() {
        return (
            <Container id="footer" style={{paddingBottom: "32px"}}>{/* <div className="row" style={{marginBottom: "1em"}}> */}
                <hr />
                <Row className="justify-content-center"><p className="text-center">Designed and developed by Kelvin Kellner.</p></Row>
                <SocialButtons />
            </Container>
        );
    }
}

export default Footer;