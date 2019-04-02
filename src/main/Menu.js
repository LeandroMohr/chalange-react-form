import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button } from 'react-bootstrap'

const links = [
    { route: "/", label: "Home" },
    { route: "/profile", label: "Profile" },
    { route: "/editprofile", label: "EditProfile" },
    { route: "/nomatch", label: "NoMatch" },
];

export class Menu extends Component {
    renderLink = () => {
        return links.map(link =>
            <Link key={link.route} className="nav-link" to={link.route}>
                {link.label}
                <br />
            </Link>
        )
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Home Refresh</Navbar.Brand>
                <Nav className="mr-auto">
                    {this.renderLink()}
                </Nav>

                <Form inline>
                    <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>

        )
    }
};

export default Menu;