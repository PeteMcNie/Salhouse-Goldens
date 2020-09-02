import React from 'react'

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const NavbarComp = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
        <Navbar.Brand href="/">
          <img
            alt="Salhouse Goldens logo, phoenix and kula laying down in the bushes looking at camera"
            src="images/logo.jpeg"
            className="shlogo d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown title="Our Goldens" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Phoenix</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Kula</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shadow</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Sherry</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Autumn</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Tuppence</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Siren</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Grooming Your Golden" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/4.1">Basic Gromming Tips</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/4.2">Grooming Service</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.3">Testimonials and photos</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="mylifewithanimals">My Life With Animals</Nav.Link>

            <NavDropdown title="About Us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/aboutus">What we are about</NavDropdown.Item>
              <NavDropdown.Item href="/aboutus">Where &apos;Salhouse&apos; comes from</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#links">Links</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavbarComp
