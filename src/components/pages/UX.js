import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
        return(
            <div id="ux-page" className="main">
                <Container>
                    <Row>
                        <Breadcrumb style={{ margin: "1em 0 1.8em 0" }}>
                            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Portfolio.</Breadcrumb.Item>
                            <Breadcrumb.Item active>UX Design.</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row>
                        <Heading>User<span>-</span>Experience Design<span>.</span></Heading>
                    </Row>
                    <Row>
                        <p>I love design thinking and the concept of user-centric design. The idea of putting the user first seems so simple, but it is surprising to see just how much change is possible when businesses start with this principle at their core.</p>
                        <p>I have completed 5 of 6 courses needed for my UX minor so far, including: Design Thinking, Information Design, Interaction Design, UX Strategy, and Research in UX. I have enjoyed these courses deeply, and am always excited to learn more about how to create better products that serve to benefit people and their needs with all the complexity and nuance they bring with them.</p>
                        <p>Throughout my time at University, I have had the chance to perform countless interviews and usability studies, designed numerous wireframes and mockups, created proposals, and designed many prototypes of various levels of fidelity and functionality – some of which you can find below.</p>
                    </Row>
                </Container>
                <ProjectDeck>
                    <Project title="YouX Careers" role="UX Researcher &amp; Software Developer" year="2021" type="Academic Project" tech="React JS, HTML, CSS" imgSrc={YouXCareersLogo} imgAlt="YouX Careers Logo"
                    actions={[{
                            message: "Read Documentation",
                            href: "https://drive.google.com/drive/folders/1LjmRZoO5lwBRGvPomZDJ7DZgDkGw_uEH?usp=sharing"
                        }, {
                            message: "Launch Prototype",
                            href: "https://youx-careers.vercel.app/"
                        }]}>
                        <p style={{fontSize: "1rem", marginBottom: 0}}>
                            Worked on a team of 4 to create an online educational tool that matches students with UX careers that fit their skills and interests.
                        </p>
                        <ul>
                            <li>User Research, Conducting Interviews</li>
                            <li>Empathy Maps, User Stories, Proto-Personas</li>
                            <li>Usability Testing</li>
                            <li>Prototyping, Iteration</li>
                        </ul>
                    </Project>
                    <Project title="UpQuest – Design For Change" role="UX Researcher" year="2021" type="Hackathon Submission" imgSrc={UpQuestLogo} imgAlt="UpQuest Logo"
                    actions={[{
                            message: "View Slide Deck",
                            href: "https://drive.google.com/file/d/1ibkh3q5ftH1jc6ssOXsa5PlyvZZT4HEL/view?usp=sharing"
                        }, {
                            message: "Watch Pitch Video",
                            href: "https://youtu.be/Cj8Bo3pJOUQ"
                        }]}>
                        Worked on a team of 3 to resarch, plan, and pitch a collaborative classroom game that creates social transformation by teaching children to engage in green behaviour.
                        <ul>
                            <li>User Research, Conducting Interviews</li>
                            <li>Empathy Maps, User Stories, Proto-Personas</li>
                            <li>Pitching, Presenting</li>
                        </ul>
                    </Project>
                    <Project title="Calendar App Comparison Case Study" role="UX Researcher" year="2021" type="Academic Project" imgSrc={GoogleVsSamsung} imgAlt="Samsung Calendar versus Google Calendar Logos"
                    actions={[{
                            message: "Read Documentation",
                            href: "https://drive.google.com/drive/folders/14ZcwYPGxhjjjnIxPxa43ZNC7P3m5Z3sW?usp=sharing"
                        }]}>
                        Worked independently to conduct studies, collect metrics and perform analytical comparisons between the two systems through the lense of the User-Experience.
                        <ul>
                            <li>User Research, Conducting Interviews, Behavioural Studies</li>
                            <li>Data Collection, Data Analysis</li>
                            <li>Using Heuristics, Usability Scores</li>
                            <li>Summarizing, Presenting Findings</li>
                        </ul>
                    </Project>
                    <Project title="Learning Management System" role="UX Researcher" year="2020" type="Academic Project" tech="HTML, CSS, JavaScript" imgSrc={LMSLogo} imgAlt="ModJournal Learning Management System Logo"
                    actions={[{
                            message: "Read Documentation",
                            href: "https://drive.google.com/drive/folders/1IeMS5170qbRe5HKVkFrXRRo_MAmyxdhk?usp=sharing"
                        }, {
                            message: "Launch Prototype",
                            href: "https://lms-prototype.vercel.app/"
                        }]}>
                        Worked with a partner to research and design a digital organizational tool for students pursuing self-paced learning options.
                        <ul>
                            <li>User Research, Conducting Interviews</li>
                            <li>Market Research, Competitive Analysis</li>
                            <li>Usability Testing</li>
                            <li>Prototyping, Iteration</li>
                            <li>Pitching, Presenting</li>
                        </ul>
                    </Project>
                    <Project title="Source For Sports" role="UX Researcher" year="2019" type="Academic Project" tech="C#" imgSrc={SourceForSportsLogo} imgAlt="Source For Sports Logo"
                    actions={[{
                            message: "View Slide Deck",
                            href: "https://drive.google.com/file/d/1DJ-hISyE38oaiGKANxGW_0BiogmPG9Gy/view?usp=sharing"
                        }]}>
                        Worked on a team of 5 to research and design a new Point-of-Sale system that reduced pain points for employees during checkout.
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