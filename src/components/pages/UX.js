import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Heading from '../Heading';
import Project from '../Project';
import ProjectDeck from '../ProjectDeck';

import LMSLogo from '../../assets/images/learning-management-system-logo.png';
import UpQuestLogo from '../../assets/images/upquest-logo.png';
import SourceForSportsLogo from '../../assets/images/source-for-sports-logo.png';
import YouXCareersLogo from '../../assets/images/youx-careers-logo.png';
import GoogleVsSamsung from '../../assets/images/google-vs-samsung.png';

class UX extends Component {
  render() {
    return (
      <div id="ux-page" className="main">
        <Container>
          <Row>
            <Breadcrumb style={{ margin: '1em 0 1.8em 0' }}>
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                Portfolio.
              </Breadcrumb.Item>
              <Breadcrumb.Item active>UX Design.</Breadcrumb.Item>
            </Breadcrumb>
          </Row>
          <Row>
            <Heading>
              User<span>-</span>Experience Design<span>.</span>
            </Heading>
          </Row>
          <Row>
            <p>
              I'm obsessed with design thinking and the concept of user-centric design. While the idea of prioritizing
              the user may seem simple, it's surprising how impactful it can be when businesses embrace this principle
              at their core.
            </p>
            <p>
              I've earned my UX minor through the completion of 6 courses, covering the following topics: Design
              Thinking, Information Architecture &amp; Design, Interaction Design, UX Strategy, UX Research Methods, and
              Design of Immersive Spaces. I thoroughly enjoyed these courses and the insights I have gained from them,
              and I am always excited to delve deeper into the intricacies of creating products that truly benefit
              people and their needs, considering all the complexity and nuance they bring with them.
            </p>
            <p>
              I'm thankful for the opportunities I've had to apply my UX knowledge throughout my university experience.
              I've conducted numerous interviews and usability studies, utilized heuristics and analysis to measure and
              compare solutions, designed wireframes, mockups, and interfaces, crafted proposals, and implemented
              prototypes with varying levels of fidelity and functionality. You can find some of these projects
              highlighted below for your reference.
            </p>
          </Row>
        </Container>
        <ProjectDeck>
          <Project
            title="YouX Careers"
            role="UX Researcher &amp; Software Developer"
            year="2021"
            type="Academic Project"
            tech="React JS, HTML, CSS"
            imgSrc={YouXCareersLogo}
            imgAlt="YouX Careers Logo"
            actions={[
              {
                message: 'Read Documentation',
                href: 'https://drive.google.com/drive/folders/1LjmRZoO5lwBRGvPomZDJ7DZgDkGw_uEH?usp=sharing',
              },
              {
                message: 'Launch Prototype',
                href: 'https://youx-careers.vercel.app/',
              },
            ]}
          >
            <p style={{ fontSize: '1rem', marginBottom: 0 }}>
              Worked on a team of four to create an online educational tool that matches students with UX careers that
              fit their skills and interests.
            </p>
            <ul>
              <li>User Research, Conducting Interviews</li>
              <li>Empathy Maps, User Stories, Proto-Personas</li>
              <li>Usability Testing</li>
              <li>Prototyping, Iteration</li>
            </ul>
          </Project>
          <Project
            title="UpQuest - Design For Change"
            role="UX Researcher"
            year="2021"
            type="Hackathon Submission"
            imgSrc={UpQuestLogo}
            imgAlt="UpQuest Logo"
            actions={[
              {
                message: 'View Slide Deck',
                href: 'https://drive.google.com/file/d/1ibkh3q5ftH1jc6ssOXsa5PlyvZZT4HEL/view?usp=sharing',
              },
              {
                message: 'Watch Pitch Video',
                href: 'https://youtu.be/Cj8Bo3pJOUQ',
              },
            ]}
          >
            Worked on a team of three to resarch, plan, and pitch an interactive classroom game that creates social
            transformation by teaching children to engage in green behaviour.
            <ul>
              <li>User Research, Conducting Interviews</li>
              <li>Empathy Maps, User Stories, Proto-Personas</li>
              <li>Pitching, Presenting</li>
            </ul>
          </Project>
          <Project
            title="Calendar App Comparison Case Study"
            role="UX Researcher"
            year="2021"
            type="Academic Project"
            imgSrc={GoogleVsSamsung}
            imgAlt="Samsung Calendar versus Google Calendar Logos"
            actions={[
              {
                message: 'Read Documentation',
                href: 'https://drive.google.com/drive/folders/14ZcwYPGxhjjjnIxPxa43ZNC7P3m5Z3sW?usp=sharing',
              },
            ]}
          >
            Worked independently to conduct studies, collect metrics and perform analytical comparisons between two
            digital calendar applications through the lense of User-Experience Researcher.
            <ul>
              <li>User Research, Conducting Interviews, Behavioural Studies</li>
              <li>Data Collection, Data Analysis</li>
              <li>Using Heuristics, Usability Scores</li>
              <li>Summarizing, Presenting Findings</li>
            </ul>
          </Project>
          <Project
            title="Learning Management System"
            role="UX Researcher"
            year="2020"
            type="Academic Project"
            tech="HTML, CSS, JavaScript"
            imgSrc={LMSLogo}
            imgAlt="ModJournal Learning Management System Logo"
            actions={[
              {
                message: 'Read Documentation',
                href: 'https://drive.google.com/drive/folders/1IeMS5170qbRe5HKVkFrXRRo_MAmyxdhk?usp=sharing',
              },
              {
                message: 'Launch Prototype',
                href: 'https://lms-prototype.vercel.app/',
              },
            ]}
          >
            Worked with a partner to research and design a digital organizational tool for students pursuing self-paced
            learning opportunities.
            <ul>
              <li>User Research, Conducting Interviews</li>
              <li>Market Research, Competitive Analysis</li>
              <li>Usability Testing</li>
              <li>Prototyping, Iteration</li>
              <li>Pitching, Presenting</li>
            </ul>
          </Project>
          <Project
            title="Source For Sports"
            role="UX Researcher"
            year="2019"
            type="Academic Project"
            tech="C#"
            imgSrc={SourceForSportsLogo}
            imgAlt="Source For Sports Logo"
            actions={[
              {
                message: 'View Slide Deck',
                href: 'https://drive.google.com/file/d/1DJ-hISyE38oaiGKANxGW_0BiogmPG9Gy/view?usp=sharing',
              },
            ]}
          >
            Worked on a team of five to research and design a new Point-of-Sale system that reduced pain points for
            employees during checkout.
            <ul>
              <li>User Research, Conducting Interviews</li>
              <li>Empathy Maps, User Stories, Proto-Personas</li>
              <li>Identifying Requirements</li>
              <li>Prototyping, Iteration</li>
              <li>Pitching, Presenting</li>
            </ul>
          </Project>
        </ProjectDeck>
      </div>
    );
  }
}

export default UX;
