import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import Tag from './Tag';

class Project extends Component {
    render() {
        const actions = this.props.actions;
        return(
            <Container className="project card">
                <Col>
                    {this.props.imgSrc === undefined ? <></> : (
                        <Image src={this.props.imgSrc} alt={this.props.imgAlt} width="auto" height="82px" style={{ marginBottom: "1.32em", maxWidth: "100%", display: "block", marginLeft: "auto", marginRight: "auto" }} />
                    )}
                    <Row>
                        <h5 style={{ marginRight: "0.24em", marginBottom: "-0.12em" }}>{this.props.title}</h5>
                    </Row>
                    <Row style={{ marginBottom: "0.48em", marginLeft: "-1.024em" }}>
                        <Tag>{this.props.type}, {this.props.year}</Tag>
                    </Row>
                    <Row style={{ marginBottom: "0.8em" }}>
                        <h6 style={{ fontWeight: 500, margin: "0.22em 0.22em 0 0" }}>{this.props.role}</h6>
                        {this.props.tech === undefined ? <></> : <Tag>– {this.props.tech}</Tag>}
                    </Row>
                    <Row>
                        {this.props.children}
                    </Row>
                    <hr />
                    {actions === undefined ? <></> : (
                        <Row style={{ display: "flex", alignItems: "stretch" }}>
                            {actions.map((a, i) => i === actions.length-1 ?
                                <a key={"ux-project-" + i} style={{ flexGrow: 1, padding: "0.16em" }} className="project-link" href={a.href} target="_blank" rel="noreferrer"><Button className="btn-project-link" variant="primary" block>{a.message}</Button></a>
                            :
                                <a key={"ux-project-" + i} style={{ flexGrow: 1, padding: "0.16em" }} className="project-link" href={a.href} target="_blank" rel="noreferrer"><Button className="btn-project-link" variant="secondary" block>{a.message}</Button></a>
                            )}
                        </Row>
                    )}
                </Col>
            </Container>
        );
    }
}

export default Project;