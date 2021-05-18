import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import SocialButtons from './SocialButtons';

import BgPetals from '../assets/images/bg-petals.png';

class Footer extends Component {
    render() {
        return (<>
            <Container id="footer" style={{paddingBottom: "32px"}}>{/* <div className="row" style={{marginBottom: "1em"}}> */}
                <hr />
                <Row className="justify-content-center"><p className="text-center">Designed and developed with &#9829; by Kelvin Kellner.</p></Row>
                <SocialButtons />
            </Container>
            <div style={{ width: "100%", height: "22px", display: "flex" }}>
                <Image id="footer-stripe" src={BgPetals} alt="Abstract wallpaper" style={{ marginTop: "0", width: "100%", objectFit: "cover", objectPosition: "bottom" }}/>
            </div>
        </>);
    }
}

export default Footer;