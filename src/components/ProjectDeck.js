import React, { Children, Component } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

class ProjectDeck extends Component {
    render() {
        const count = Children.count(this.props.children);
        return(
            <Jumbotron style={{paddingBottom: "2em", paddingTop: "1em", marginTop: "1.4em"}}>
                <Container className="project-deck">
                    <Row xs={1} lg={count % 3 === 0 ? 3 : (count > 1 ? 2 : 1)}>
                    {/* <Row xs={1} sm={count % 3 === 0 ? 3 : (count % 2 === 0 ? 2 : 1)}> */}
                        {this.props.children.map((child, i) => <Col key={"deck-card-" + i}>{child}</Col>)}
                    </Row>
                    <Row style={{justifyContent: "center", marginTop: "1em"}}>
                        <Button variant="link" onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth'})}>Scroll to Top of Page</Button>    
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default ProjectDeck;