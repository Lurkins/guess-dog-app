import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'; 

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar dark expand="md" className="navbar-custom">
        <NavbarBrand tag={Link} to="/" className="nav-logo">Guess Dog</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/about">RULES/ABOUT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/play">PLAY</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/bunchofdogs">BUNCH OF DOGS</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default Navigation;