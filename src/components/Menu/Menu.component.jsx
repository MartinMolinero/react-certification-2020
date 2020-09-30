import React from 'react';
import { useHistory } from 'react-router';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useAuth } from '../../providers/Auth';
import UserInfo from '../UserInfo';
import Searchbar from '../Searchbar/Searchbar.component';
import './MenuComponent.css';

const Menu = () => {
  const { authenticated, logout } = useAuth();
  const history = useHistory();
  function deAuthenticate(event) {
    logout();
    event.preventDefault();
    history.push('/');
  }
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="/">{authenticated && <UserInfo />}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/">Videos challenge</Nav.Link>
          {authenticated && <Nav.Link href="/favorites">Favorites</Nav.Link>}
        </Nav>
        {authenticated && <Searchbar />}
        <Nav>
          {authenticated && (
            <Button
              data-testid="logout-button"
              variant="outline-danger"
              onClick={deAuthenticate}
            >
              Logout
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
