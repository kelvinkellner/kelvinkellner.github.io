import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Header extends Component {
    //Kelvin<span>_</span>Kellner<span>.</span>
    render(){
        return (
            <Container id="header">
                <Row>
                    <Col style={{padding: 0, maxWidth: "172px"}}>
                        <h4 id="title" className="hover-space">
                            <Link to="/">Kelvin<span>_</span>Kellner<span>.</span></Link>
                        </h4>
                    </Col>
                    <Col style={{padding: 0}}>
                        <ul className="nav nav-header" style={{marginTop: "0.2em"}}>
                            <li className="nav-item"><NavLink to="/ux" activeClassName="active" className="hover-space">UX Design.</NavLink></li>
                            <li className="nav-item"><NavLink to="/dev" activeClassName="active" className="hover-space">Development.</NavLink></li>
                            <li className="nav-item"><NavLink to="/graphic-design" activeClassName="active" className="hover-space">Graphic Design.</NavLink></li>
                            {/*
                                <li className="nav-item"><NavLink to="/" activeClassName="active">Portfolio.</NavLink></li>
                                <li className="nav-item"><NavLink to="/hobbies" activeClassName="active">Hobbies.</NavLink></li>
                                <li className="nav-item"><NavLink to="/about" activeClassName="active">About Me.</NavLink></li>
                            */}
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header