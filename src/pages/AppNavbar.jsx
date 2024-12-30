import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function AppNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">HRMS</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#">About Us</Nav.Link>
                <Nav.Link href="#">Employees</Nav.Link>
                <Nav.Link href="#">Projects</Nav.Link>
                <Nav.Link href="#">Departments</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default AppNavbar;
