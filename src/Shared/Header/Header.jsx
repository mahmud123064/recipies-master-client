import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/blank-profile-picture.webp';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user?.email);

    const handleLogout = () => {
        logOut()
        .then()
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div >
            {/* <Container> */}
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='Container'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Link className='text-decoration-none' to = "/"><h5>RECIPIES MASTER</h5></Link>
                        <Nav className="mx-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            <img className='pofile-img' src={logo} alt="" />
                            <Nav.Link eventKey={2} >
                                {user?.email ?
                                    <Link><Button onClick={handleLogout} variant="secondary">LogOut</Button></Link> :
                                    <Link to='/login'><Button variant="secondary">Login</Button></Link>}

                                <Link>{user?.email}</Link>

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