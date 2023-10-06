import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import './header.css';
import BgPetals from '@images/bg-petals.png';
import ProfilePic from '@images/kelvin-kellner-rbg.jpg';

class Header extends Component {
  render() {
    return (
      <>
        <div id="header-stripe-container">
          <Image id="header-stripe" src={BgPetals} alt="Abstract wallpaper" />
        </div>
        <Container id="header">
          <Row id="profile-container" className="d-flex">
            <Col id="profile-pic-container">
              <Image
                id="profile-pic"
                src={ProfilePic}
                width={180}
                height={180}
                roundedCircle
                alt="Photograph of Kelvin Kellner smiling into the camera while wearing a green fleece sweater unzipped over a black t-shirt, brightly coloured flowers are visible in the blurry background."
              />
            </Col>
            <Col className="flex-grow-1">
              <h4 id="title">Kelvin Kellner</h4>
              <h6 id="subtitle">Tagline, tagline, tagline</h6>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Header;
