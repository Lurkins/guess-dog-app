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
import Logo from './paw-logo.png';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar dark expand="md" className="navbar-custom">
        <NavbarBrand tag={Link} to="/" className="nav-logo"><img src={Logo} className="logo mr-2" alt="paw logo"></img>Guess Dog</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
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