import React, { useEffect } from 'react'

import {
         Form,
         Nav,
         Navbar,
         NavDropdown,
         Container
} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';




function Header() {
 
  const userDetails=  localStorage.getItem('userInfo')
  console.log("dd",userDetails);
 
 let user= JSON.parse(userDetails)
 
  
 const navigate=useNavigate();
  return (
    
    <Navbar bg="primary" expand="lg" variant='dark'>
    <Container>
      <Navbar.Brand onClick={()=>{
              
              navigate('/')
            }} >
   Home
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
            <Nav className='m-auto' >
            <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
         
        </Form>
            </Nav>
        <Nav
          className=" my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
  { !userDetails &&           <Nav.Link onClick={()=>{
            navigate('/login')
          }}>Login</Nav.Link> }

    { userDetails &&      <NavDropdown  title={userDetails ? user.name : 'Login'} id="navbarScrollingDropdown">
           
           
            <NavDropdown />
           <NavDropdown.Item onClick={()=>{
              localStorage.removeItem('userInfo')
              
              navigate('/login')
            }} >
           Logout
            </NavDropdown.Item> 
          </NavDropdown> }
         
        </Nav>
     
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header