import React from 'react';
import { Button, Container, Nav,Navbar } from 'react-bootstrap';
import logo from '../../assets/blank-profile-picture.webp';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            {/* <Container> */}
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='Container'>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <h5>RECIPIES MASTER</h5>
                            <Nav className="mx-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/blog">Blog</Nav.Link>
                            </Nav>
                            <Nav>
                                <img className='pofile-img' src={logo} alt="" />
                                <Nav.Link eventKey={2} >
                                    <Link to='/login'><Button variant="secondary">Login</Button></Link>

                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            {/* </Container> */}
        </div>
    );
};

export default Header;