import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Heading from '../Heading';
import Project from '../Project';
import ProjectDeck from '../ProjectDeck';

import KelvinKellnerLogo from '../../assets/images/kelvin-kellner-logo.png';
import LetsGetThisBreadDuck from '../../assets/images/lets-get-this-bread-duck.png';
import LMSLogo from '../../assets/images/learning-management-system-logo.png';
import YouXCareersLogo from '../../assets/images/youx-careers-logo.png';
import MuSpaceLogo from '../../assets/images/muspace-logo.svg';
import HealthyHawkLogo from '../../assets/images/healthyhawk-logo.png';

class Dev extends Component {
  render() {
    return (
      <div id="dev-page" className="main">
        <Container>
          <Row>
            <Breadcrumb style={{ margin: '1em 0 1.8em 0' }}>
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                Portfolio.
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Software.</Breadcrumb.Item>
            </Breadcrumb>
          </Row>
          <Row>
            <Heading>
              Software Engineering <span>&amp;</span> Website Development<span>.</span>
            </Heading>
          </Row>
          <Row>
            <p>
              Puzzles have always fascinated me. From when I was a kid playing with Rubik&apos;s Cubes, playing
              challenging board games, or learning to code - I have never been the type of person to shy away from
              challenges; I am a problem-solver after all. I love working with others to analyse issues, brainstorm
              ideas, and begin implementing solutions.
            </p>
            <p>
              University has given me the opportunity to learn tons of new information about mathematics, computing, and
              algorithms. I am fascinated with the idea of creating products that can solve problems efficiently and
              effectively, and I believe that building and testing prototypes is the best way to achieve successful
              outcomes. I hope to continue exploring the worlds of software, website, and mobile development in the
              years to come. In the mean time, you can find some of the past projects I have worked on below.
            </p>
          </Row>
        </Container>
        <ProjectDeck count={3}>
          <Project
            title="Portfolio Website"
            role="Front End Software Developer"
            year="2020-2021"
            type="Personal Project"
            tech="React JS, HTML, CSS, Bootstrap"
            imgSrc={KelvinKellnerLogo}
            imgAlt="Kelvin Kellner website logo"
            actions={[
              {
                message: 'View on GitHub',
                href: 'https://github.com/kelvinkellner/kelvinkellner.github.io/',
              },
            ]}
          >
            Created a digital portfolio website for showcasing academic and personal projects using React, Bootstrap,
            and CSS.
          </Project>
          <Project
            title="MuSpace"
            role="Front End Software Developer"
            year="2021"
            type="Academic Project"
            tech="React JS, HTML, CSS, Firebase"
            imgSrc={MuSpaceLogo}
            imgAlt="MuSpace logo"
            actions={[
              {
                message: 'View on GitHub',
                href: 'https://github.com/kelvinkellner/MuSpace',
              },
            ]}
          >
            Contributed as a Front End Software Engineer in a big team, building a music-sharing social media platform.
            Integrated Spotify API to fuel our app's data needs.
          </Project>
          <Project
            title="HealthyHawk"
            role="Android App Developer"
            year="2021"
            type="Academic Project"
            tech="Android Studio, Java, XML"
            imgSrc={HealthyHawkLogo}
            imgAlt="Healthy Hawk app logo"
            actions={[
              {
                message: 'View on GitHub',
                href: 'https://github.com/kelvinkellner/HealthyHawk',
              },
              {
                message: 'Watch Demo',
                href: 'https://www.youtube.com/watch?v=r3Z0bfseis0',
              },
            ]}
          >
            Worked in a team of five to design and implement a simple fitness activity tracker and goal-setting mobile
            app for Android.
          </Project>
          <Project
            title="YouX Careers"
            role="Software Developer &amp; UX Researcher"
            year="2021"
            type="Academic Project"
            tech="React JS, HTML, CSS"
            imgSrc={YouXCareersLogo}
            imgAlt="YouX Careers Logo"
            actions={[
              {
                message: 'View on GitHub',
                href: 'https://github.com/kelvinkellner/youx-careers',
              },
              {
                message: 'Launch Prototype',
                href: 'https://youx-careers.vercel.app/',
              },
            ]}
          >
            Worked in a team of four to design and implement a prototype for an educational platform with the goal of
            aligning students with UX careers that match their interests.
          </Project>
          <Project
            title="Learning Management System"
            role="Software Developer &amp; UX Researcher"
            year="2020"
            type="Academic Project"
            tech="HTML, CSS, JavaScript"
            imgSrc={LMSLogo}
            imgAlt="ModJournal Learning Management System Logo"
            actions={[
              {
                message: 'View on GitHub',
                href: 'https://github.com/kelvinkellner/lms-prototype',
              },
              {
                message: 'Launch Prototype',
                href: 'https://lms-prototype.vercel.app/',
              },
            ]}
          >
            Collaborated with a partner to design and prototype a modular organizational tool, similar to bullet
            journals, tailored towards students engaged in self-paced learning.
          </Project>
          <Project
            title="Let's Get This Bread"
            role="Game Developer"
            year="2019"
            type="Academic Project"
            tech="Java"
            imgSrc={LetsGetThisBreadDuck}
            imgAlt="Let's Get This Bread pixel art Duck character"
            actions={[
              {
                message: 'View on GitHub',
                href: 'https://github.com/kelvinkellner/Lets-Get-This-Bread',
              },
            ]}
          >
            Designed and prototyped a basic 2D platformer game in Java using Object-Oriented Programming (OOP)
            principles. Play as a pixel art duck in search of food.
          </Project>
        </ProjectDeck>
      </div>
    );
  }
}

export default Dev;
