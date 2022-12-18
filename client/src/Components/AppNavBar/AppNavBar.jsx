import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { logout } from '../../Redux/Slices/userSlice';

function AppNavBar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const links = user.id ? [{ name: 'Home', link: '/' }] : [{ name: 'SignIn', link: '/signin' }, { name: 'SignUp', link: '/signup' }];
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Code Helper</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {links.map((link) => <NavLink to={link.link} key={link.link} className="nav-link">{link.name}</NavLink>) }
          </Nav>
          <div className="navbar-nav ml-auto">
            {user.id
            && (
            <>
              <span className="nav-link">
                Hi,
                {' '}
                {user.name}
              </span>
              <Button variant="outline-danger" className="nav-link" onClick={logoutHandler}>
                Logout
              </Button>
            </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavBar;
