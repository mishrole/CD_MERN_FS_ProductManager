import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
        Product Manager (Practice)
        </Link>
        <Nav className="me-auto">
          <Link className="nav-link" to="/">Products</Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default Header