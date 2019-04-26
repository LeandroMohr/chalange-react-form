import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'

const links = [
    { route: "/", label: "Home" },
    { route: "/formprofile", label: "Form Profile" },
    { route: "/profile", label: "Profile" },
    { route: "/nomatch", label: "NoMatch" },
    { route: "/sucess", label: "Sucess" },
];

export class Menu extends Component {
    renderLink = () => {
        return links.map(link =>
            <Link key={link.route} className="nav-link" to={link.route}>
                {link.label}
            </Link>
        )
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    {this.renderLink()}
                </Nav>
            </Navbar>
        )
    }
};

export default Menu;