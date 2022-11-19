import React from 'react'
import {LinkContainer} from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return     <header>
    <Navbar bg="dark"  variant='dark' collapseOnSelect expand="lg">
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand >ProShop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to='/cart'>
               <NavLink>
                    <i className='fas fa-shopping-cart'></i>Cart 
                </NavLink> 
            </LinkContainer>
            <LinkContainer to='/login'>
                <NavLink>
                    <i className='fas fa-user'></i>Sign in
                </NavLink>
            </LinkContainer>
                       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </header>
  }

export default Header