import React, { Component } from 'react';
import '../App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link className='navbar-brand' to="/">SpaceX</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link className='nav-link' to="/launchpads">Launchpads</Link>
                    <Link className='nav-link' to="/missions">Missions</Link>
                    <Link className='nav-link' to="/payloads">Payloads</Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;