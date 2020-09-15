import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

function NavbarComp () {
  const history = useHistory()

  function handleOurGoldens () {
    history.push('/ourgoldens')
  }

  const [show, setShow] = useState(false)
  function showDropdown () {
    setShow(!show)
  }
  function hideDropdown () {
    setShow(false)
  }

  function handleGYG () {
    history.push('/gyg')
  }

  const [showGyg, setShowGyg] = useState(false)
  function showDropdownGyg () {
    setShowGyg(!showGyg)
  }
  function hideDropdownGyg () {
    setShowGyg(false)
  }

  function handleAu () {
    history.push('/aboutus')
  }

  const [showAu, setShowAu] = useState(false)
  function showDropdownAu () {
    setShowAu(!showAu)
  }
  function hideDropdownAu () {
    setShowAu(false)
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

            <NavDropdown show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
              onClick={handleOurGoldens}
              title="Our Goldens"
              id="collasible-nav-dropdown">

              <NavDropdown.Item href="/phoenix">Phoenix</NavDropdown.Item>
              <NavDropdown.Item href="/kula">Kula</NavDropdown.Item>
              <NavDropdown.Item href="/shadow">Shadow</NavDropdown.Item>
              <NavDropdown.Item href="/sherry">Sherry</NavDropdown.Item>
              <NavDropdown.Item href="/autumn">Autumn</NavDropdown.Item>
              <NavDropdown.Item href="/tuppence">Tuppence</NavDropdown.Item>
              <NavDropdown.Item href="/siren">Siren</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown show={showGyg}
              onMouseEnter={showDropdownGyg}
              onMouseLeave={hideDropdownGyg}
              onClick={handleGYG}
              title="Grooming Your Golden"
              id="collasible-nav-dropdown">

              <NavDropdown.Item href="#basicGroomingTips">Basic Grooming Tips</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#groomingService">Grooming Service</NavDropdown.Item>
              <NavDropdown.Item href="#t&p">Testimonials and photos</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/mylifewithanimals">My Life With Animals</Nav.Link>

            <NavDropdown show={showAu}
              onMouseEnter={showDropdownAu}
              onMouseLeave={hideDropdownAu}
              onClick={handleAu}
              title="About Us"
              id="collasible-nav-dropdown"
              alignRight >

              <NavDropdown.Item href="/aboutus">What we are about</NavDropdown.Item>
              <NavDropdown.Item href="/aboutus">Where &apos;Salhouse&apos; comes from</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/links">Links</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavbarComp
