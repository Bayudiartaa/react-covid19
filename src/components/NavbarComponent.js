import React from 'react';
import { Container, Nav, Navbar }  from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../pages/Home';
import Indonesia from '../pages/Indonesia';
const NavbarComponent = () => {
    return (
      <Router>
        <Navbar bg="primary" variant="dark">
          <Container>
          <Navbar.Brand as={Link} to="/">Covid 19</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/indonesia">Indonesia</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
  
          <Switch>
            <Route path="/indonesia">
              <Indonesia />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    );
};

export default NavbarComponent;