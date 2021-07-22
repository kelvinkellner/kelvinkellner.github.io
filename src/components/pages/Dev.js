import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Heading from '../Heading';
import Project from '../Project';
import ProjectDeck from '../ProjectDeck';

import DavesAutoLogo from '../../assets/images/daves-auto-service-logo.png';
import KelvinKellnerLogo from '../../assets/images/kelvin-kellner-logo.png';
import LetsGetThisBreadDuck from '../../assets/images/lets-get-this-bread-duck.png';
import LitLogo from '../../assets/images/lit-logo.png';
import LMSLogo from '../../assets/images/learning-management-system-logo.png';
import YouXCareersLogo from '../../assets/images/youx-careers-logo.png';

class Dev extends Component {
    render() {
        return(
            <div id="dev-page" className="main">
            <Container>
                <Row>
                    <Breadcrumb style={{margin: "1em 0 1.8em 0"}}>
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Portfolio.</Breadcrumb.Item>
                        <Breadcrumb.Item active>Development.</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row>
                    <Heading>Software <span>&amp;</span> Website Development<span>.</span></Heading>
                </Row>
                <Row>
                    <p>Puzzles have always fascinated me. From when I was a kid playing with Rubik&apos;s Cubes, playing challenging board games, or learning to code – I have never been the type of person to shy away from challenges. I am a problem-solver after all. I love working with others to analyse issues, brainstorm ideas, and begin implementing solutions.</p>
                    <p>University has given me the opportunity to learn tons of new information about mathematics, computing, and algorithms. I have also gained a strong interest in UI/UX Design and creating products that are easy to use and serve some benefit to users. I hope to continue exploring the worlds of software, website, and mobile development in the years to come. Until then, you can find some of the past projects I have worked on below.</p>
                </Row>
            </Container>
            <ProjectDeck>
                <Project title="Portfolio Website" role="Front End Software Developer" year="2020-2021" type="Personal Project" tech="React JS, HTML, CSS" imgSrc={KelvinKellnerLogo} imgAlt="Kelvin Kellner website logo"
                actions={[{
                        message: "View on GitHub",
                        href: "https://github.com/kelvinkellner/kelvinkellner.github.io/"
                    }]}>
                    Designed and implemented a digital portfolio website for hosting academic and personal projects. Website made with React JS, React Bootstrap, and CSS.
                </Project>
                <Project title="YouX Careers" role="Software Developer &amp; UX Researcher" year="2021" type="Academic Project" tech="React JS, HTML, CSS" imgSrc={YouXCareersLogo} imgAlt="YouX Careers Logo"
                actions={[{
                        message: "View on GitHub",
                        href: "https://github.com/kelvinkellner/youx-careers"
                    }, {
                        message: "Launch Prototype",
                        href: "https://youx-careers.vercel.app/"
                    }]}>
                    Worked on a team of 4 to design and implement a prototype for an online educational tool that matches students to UX careers that fit their skills and interests.
                </Project>
                <Project title="Learning Management System" role="Software Developer &amp; UX Researcher" year="2020" type="Academic Project" tech="HTML, CSS, JavaScript" imgSrc={LMSLogo} imgAlt="ModJournal Learning Management System Logo"
                actions={[{
                        message: "View on GitHub",
                        href: "https://github.com/kelvinkellner/lms-prototype"
                    }, {
                        message: "Launch Prototype",
                        href: "https://lms-prototype.vercel.app/"
                    }]}>
                    Worked with a partner to design and prototype a modular organizational tool similar to bullet journals for students pursuing self-paced learning options.
                </Project>
                <Project title="Dave&apos;s Auto Service" role="Web Designer &amp; Digital Media Manager" year="2015-2020" type="Part-Time Employement" tech="Wix Editor, Adobe Suite" imgSrc={DavesAutoLogo} imgAlt="Dave's Auto Service Logo"
                actions={[{
                        message: "Visit Website",
                        href: "https://www.davesautoservice.ca/"
                    }]}>
                    Designed a visually appealing website for customers to quickly discover important information about the business.
                </Project>
                <Project title="LIT: Learn to Invest Today" role="UX Researcher &amp; Software Developer" year="2019" type="Hackathon Submission" tech="React JS, CSS, Figma" imgSrc={LitLogo} imgAlt="LIT: Learn to Invest Today Logo"
                actions={[{
                        message: "View Slide Deck",
                        href: "https://drive.google.com/file/d/19IiIPuUV3Lje9slTnqC2WvaPvlL5MjDb/view?usp=sharing"
                    }]}>
                    Prototyped and pitched an idea for an online educational tool that teaches new investors all the basics of investing.
                </Project>
                <Project title="Let&apos;s Get This Bread" role="Game Developer" year="2019" type="Academic Project" tech="Java" imgSrc={LetsGetThisBreadDuck} imgAlt="Let's Get This Bread pixel art Duck character"
                actions={[{
                        message: "View on GitHub",
                        href: "https://github.com/kelvinkellner/Lets-Get-This-Bread"
                    }]}>
                    Planned and prototyped a simple 2D platformer game where you play as a pixel art duck who is adamantly in search of bread. Implemented in Java.
                </Project>
            </ProjectDeck>
        </div>
        );
    }
}

export default Dev;