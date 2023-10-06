import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import './footer.css';
import BgPetals from '@assets/images/bg-petals.png';

class Footer extends Component {
  render() {
    return (
      <>
        <Container id="footer">
          <hr />
          <p id="footer-text" className="justify-content-center text-center">
            Designed and developed with &#9829; by Kelvin Kellner.
          </p>
        </Container>
        <div id="footer-stripe-container">
          <Image id="footer-stripe" src={BgPetals} alt="Abstract wallpaper" />
        </div>
      </>
    );
  }
}

export default Footer;
