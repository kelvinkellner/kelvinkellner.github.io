import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Heading from '../Heading';
import Project from '../Project';
import ProjectDeck from '../ProjectDeck';

import AroraLogo from '../../assets/images/arora-logo.png';
import DavesAutoLogo from '../../assets/images/daves-auto-service-logo.png';
import GraffitiLogo from '../../assets/images/kelvin-graffiti-scratch-logo.png';

class GraphicDesign extends Component {
  render() {
    return (
      <div id="graphic-design-page" className="main">
        <Container>
          <Row>
            <Breadcrumb style={{ margin: '1em 0 1.8em 0' }}>
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                Portfolio.
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Graphic Design.</Breadcrumb.Item>
            </Breadcrumb>
          </Row>
          <Row>
            <Heading>
              Graphic Design<span>.</span>
            </Heading>
          </Row>
          <Row>
            <p>
              I have always considered myself to be a creative person. Exploring new mediums, tools, and talents has
              always been a favourite pass-time of mine. Graphic Design and the Visual Arts have allowed me to express
              my thoughts and emotions in a form that is both enjoyable for me to learn, and satisfying to share with
              others. During high school, I seriously adored the arts, I even received offers for Graphic Design college
              programs but ultimately chose to pursue Computer Science instead.
            </p>
            <p>
              The creative arts and entertainment sector has always had a pull on me. Music is a huge part of my life,
              lately I've been fortunate for the opportunity to help my good family friend, Nikhil Arora (
              <a href="https://www.instagram.com/nkhlsview/" target="_blank" rel="noreferrer">
                @nkhlsview
              </a>
              ), to shoot music videos for underground hip-hop/rap artists. Before that, I worked with his brother,
              Bijoy Arora (
              <a href="https://www.instagram.com/bijoyarora/" target="_blank" rel="noreferrer">
                @bijoyarora
              </a>
              ), to launch his streetwear fashion brand (
              <a href="https://www.instagram.com/notarora/" target="_blank" rel="noreferrer">
                @notarora
              </a>
              ). Lately, I've been practicing sewing and pattern-making to expand my wardrobe with unique pieces I can
              feel comfortable in and be proud of. I encourage you to follow the highlights of my sewing journey on
              Instagram (
              <a href="https://www.instagram.com/kelvinkilledit/" target="_blank" rel="noreferrer">
                @kelvinkilledit
              </a>
              ).
            </p>
            <p>
              My Graphic Design career has consisted of various freelance projects with local businesses in Ontario. I
              enjoy sketching ideas on paper and using a computer to turn concepts into reality. Below, you'll find
              examples of some of my previous design work.
            </p>
          </Row>
        </Container>
        <ProjectDeck>
          <Project
            title="ARORA"
            role="Graphic Designer"
            year="2019-2021"
            type="Freelance Work"
            tech="Photoshop, Illustrator"
            imgSrc={AroraLogo}
            imgAlt="ARORA Logo"
            actions={[
              {
                message: 'Visit Website',
                href: 'https://www.byarora.com/',
              },
              {
                message: 'View Instagram Profile',
                href: 'https://www.instagram.com/notarora/',
              },
            ]}
          >
            Collaborated with the creative director to design vectorized illustrations for logos, branding, and
            promotional assets. Edited fashion photography to produce digital product mockups for online retailing.
          </Project>
          <Project
            title="Dave's Auto Service"
            role="Digital Media Manager"
            year="2015-2021"
            type="Part-Time Employement"
            tech="Photoshop, Wix"
            imgSrc={DavesAutoLogo}
            imgAlt="Dave's Auto Service Logo"
            actions={[
              {
                message: (
                  <>
                    <s>Visit Website</s> (Permanently Closed)
                  </>
                ),
                href: 'https://www.davesautoservice.ca/',
                type: 'disabled',
              },
            ]}
          >
            Designed graphics for various purposes, including logos, business cards, website, road signs, store-front
            signs, social media posts and more. Managed the company's website and social media presence.
          </Project>
          <Project
            title="Freelance Digital Artwork"
            role="Graphic Designer"
            year="2016-2020"
            type="Freelance Work"
            tech="Photoshop"
            imgSrc={GraffitiLogo}
            imgAlt="Kelvin written in scratchy graffiti style"
            actions={[
              {
                message: 'View Instagram Profile',
                href: 'https://www.instagram.com/glittr.bugg/',
              },
            ]}
          >
            Received commission for illustrating minimalist designs for local musicians, artists, and small businesses.
            Promoted my abilities on Instagram to attract customers and gain a following.
          </Project>
        </ProjectDeck>
      </div>
    );
  }
}

export default GraphicDesign;
