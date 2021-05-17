import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import Heading from '../Heading';
import MeImg from '../../assets/images/kelvin-prom.jpg';
import SocialButtons from '../SocialButtons';

let count = 0;

class Home extends Component {
    smileyEasterEgg() {
        count++;
        const smiley = document.getElementById('smiley');
        const clone = smiley.cloneNode(true);
        clone.style.position = 'absolute';
        clone.style.top = document.getElementById('title').getBoundingClientRect().top;
        clone.id = 'smiley-clone-' + count;
        smiley.before(clone);
        clone.classList.add('smiley-easter-egg');
        window.setTimeout(function () {
            clone.remove();
        }, 5000);
    }

    render() {
        return (
            <Container id="home-page" className="main">
                <Row style={{ paddingBottom: "4em" }}>
                    <Col style={{ padding: "2em 2em 0 0" }}>
                        <Image src={MeImg} alt="Photograph of Kelvin Kellner" rounded fluid></Image>
                    </Col>
                    <Col sm={12} lg={8} xl={8} style={{ padding: 0, margin: "3.2em 0 0 0.2em" }}>
                        <Heading>Passionate About Learning <span>&amp;</span> Creating<span>.</span></Heading>
                        <p>
                            <Button variant="link" className="btn-secret-link" onClick={this.smileyEasterEgg}>Hello!</Button><svg id="smiley" style={{ visibility: "hidden", margin: "-18px" }} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"> 
                            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 14h-12c.331 1.465 2.827 4 6.001 4 3.134 0 5.666-2.521 5.999-4zm0-3.998l-.755.506s-.503-.948-1.746-.948c-1.207 0-1.745.948-1.745.948l-.754-.506c.281-.748 1.205-2.002 2.499-2.002 1.295 0 2.218 1.254 2.501 2.002zm-7 0l-.755.506s-.503-.948-1.746-.948c-1.207 0-1.745.948-1.745.948l-.754-.506c.281-.748 1.205-2.002 2.499-2.002 1.295 0 2.218 1.254 2.501 2.002z"/></svg>
                            I am a software developer &amp; visual designer currently studying Computer Science, User-Experience Design, &amp; Mathematics at Wilfrid Laurier University. 
                            I have an affection for building new skills and helping others grow.</p>
                        <p>
                            Feel free to browse through some of the projects I have been working on, and don't feel too shy to reach out:
                        </p>                            
                        <SocialButtons style={{ margin: "2.2em 0 0 0.1em", fontSize: "1.1rem" }} justifyContent="left" iconSize="28" shiftDown="2" />
                    </Col>
                    <Col xs={0} xl={1}/>
                </Row>
                <Row>
                    <Heading>What would you like to see<span>?</span></Heading>
                </Row>
                <Row xs={1} md={3} style={{ marginBottom: "4em" }}>
                    <Col><Button variant="section-selector"><Link to="/ux"><h3>UX Design</h3></Link></Button></Col>
                    <Col><Button variant="section-selector"><Link to="/dev"><h3>Development</h3></Link></Button></Col>
                    <Col><Button variant="section-selector"><Link to="/graphic-design"><h3>Graphic Design</h3></Link></Button></Col>
                </Row>
            </Container>
        );
    }
}

export default Home;