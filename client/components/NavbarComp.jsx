import React from 'react'
import { useHistory } from 'react-router-dom'

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

function NavbarComp () {
  const history = useHistory()

  function handleClick () {
    history.push('/ourgoldens')
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
        <Navbar.Brand href="/">
          <img
            alt="Goldens retrievers, phoenix and kula"
            src="images/logo.jpeg"
            className="shlogo d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown onClick={handleClick} title="Our Goldens" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/phoenix">Phoenix</NavDropdown.Item>
              <NavDropdown.Item href="/kula">Kula</NavDropdown.Item>
              <NavDropdown.Item href="#ourgoldens/shadow">Shadow</NavDropdown.Item>
              <NavDropdown.Item href="#ourgoldens/sherry">Sherry</NavDropdown.Item>
              <NavDropdown.Item href="#ourgoldens/autumn">Autumn</NavDropdown.Item>
              <NavDropdown.Item href="#ourgoldens/tuppence">Tuppence</NavDropdown.Item>
              <NavDropdown.Item href="#ourgoldens/siren">Siren</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Grooming Your Golden" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/4.1">Basic Gromming Tips</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/4.2">Grooming Service</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.3">Testimonials and photos</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="mylifewithanimals">My Life With Animals</Nav.Link>

            <NavDropdown alignRight title="About Us" id="collasible-nav-dropdown">
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
