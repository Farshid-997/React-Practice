import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
class nav extends React.Component{
    render(){
       return(
           <div class="apps">
               <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">React</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                <Nav.Link href="#home">Contact US</Nav.Link>
               <Nav.Link href="#link">About US</Nav.Link>
               <Nav.Link href="#link">Blog Post</Nav.Link>
               <Nav.Link href="#link">Profile</Nav.Link>
             </Nav> 
          </Navbar.Collapse>
             </Navbar>
             <br></br>
               <div >
                  <br></br>
                    <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                   <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                   Library
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
               </div>
           </div>
       )
   }
}

export default nav;