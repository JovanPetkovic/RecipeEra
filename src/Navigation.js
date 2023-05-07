import {Link} from "react-router-dom";
import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home" className="mx-4 py-0">RecipeEra</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="w-25 justify-content-between">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/recipes">Recipes</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;