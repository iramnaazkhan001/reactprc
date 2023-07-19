import React from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand><Link to='/home' className='text-decoration-none text-dark'>tnpLab</Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/home'  className='text-decoration-none text-dark'>Home</Link></Nav.Link>
                            <Nav.Link><Link to='/about' className='text-decoration-none text-dark'>About</Link></Nav.Link>
                            <Nav.Link><Link to='/contact' className='text-decoration-none text-dark'>Contact</Link></Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header