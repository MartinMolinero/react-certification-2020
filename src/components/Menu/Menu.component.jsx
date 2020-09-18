import React from 'react';
import { useHistory } from 'react-router';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import UserInfo from '../UserInfo';

const Menu = () => {
  const { authenticated, logout } = useAuth();
  const history = useHistory();
  function deAuthenticate(event) {
    logout();
    event.preventDefault();
    history.push('/');
  }
  return (
    <Navbar bg="light" expand="lg">
      {authenticated && <UserInfo />}
      <Navbar>
        <Link to="/">Videos challenge</Link>
      </Navbar>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {authenticated && (
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div>
              <Link to="/favorites">Favorites</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      )}
      {authenticated && (
        <Button variant="outline-danger" onClick={deAuthenticate}>
          Logout
        </Button>
      )}
    </Navbar>
  );
};

export default Menu;
