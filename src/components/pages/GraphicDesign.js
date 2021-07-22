import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Heading from '../Heading';
import Project from '../Project';
import ProjectDeck from '../ProjectDeck';

import AroraLogo from '../../assets/images/arora-logo.png';
import DavesAutoLogo from '../../assets/images/daves-auto-service-logo.png';
import KGodlessLogo from '../../assets/images/k-godless-logo.png';

class GraphicDesign extends Component {
    render() {
        return(
            <div id="graphic-design-page" className="main">
            <Container>
                <Row>
                    <Breadcrumb style={{margin: "1em 0 1.8em 0"}}>
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Portfolio.</Breadcrumb.Item>
                        <Breadcrumb.Item active>Graphic Design.</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row>
                    <Heading>Graphic Design<span>.</span></Heading>
                </Row>
                <Row>
                    <p>I have always considered myself to be a creative-type. Mastering new tools and talents has always been a favourite pass-time of mine. Graphic Design and the Visual Arts have allowed me to express my thoughts and emotions in a form that is both enjoyable to learn, and satisfying to share with others.</p>
                    <p>I have experience doing freelance work with local businesses in Ontario, Canada. Products I have worked on range from logos, business cards, and posters, to entire website layouts, crazy photo edits, product mockups, and more. I enjoy sketching my ideas on paper and using my computer to turn realities. You can find some of my previous design work below.</p>
                </Row>
            </Container>
            <ProjectDeck>
                <Project title="ARORA" role="Graphic Designer" year="2019-2021" type="Freelance Contract" tech="Photoshop, Illustrator" imgSrc={AroraLogo} imgAlt="ARORA Logo"
                actions={[{
                        message: "Visit Website",
                        href: "https://www.byarora.com/"
                    }]}>
                    Collaborated with creative director to design vector-art illustrations for logos, branding graphics, and promotional assets. Edited photographs to create digital product mockups.
                </Project>
                <Project title="Dave&apos;s Auto Service" role="Digital Media Manager, Web Designer" year="2015-2021" type="Part-Time Employement" tech="Photoshop" imgSrc={DavesAutoLogo} imgAlt="Dave's Auto Service Logo"
                actions={[{
                        message: "Visit Website",
                        href: "https://www.davesautoservice.ca/"
                    }]}>
                    Created designs for logos, business cards, website, road signs, store-front signs, social media posts and more. Managed social media presence for the company.
                </Project>
                <Project title="Digital Photo Illustrations" role="Graphic Designer" year="2016-2020" type="Academic Project" tech="Photoshop" imgSrc={KGodlessLogo} imgAlt="K. Godless Instagram Portfolio Logo"
                actions={[{
                        message: "View Instagram Profile",
                        href: "https://www.instagram.com/k.godless/"
                    }]}>
                    Received commission for illustrating minimalist design pieces for local musicians, artists, and small businesses. Promoted my abilities on Instagram and gained a small social media following.
                </Project>
            </ProjectDeck>
        </div>
        );
    }
}

export default GraphicDesign;