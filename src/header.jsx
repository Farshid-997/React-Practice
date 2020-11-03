import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import App from './App';
import About from './Compo/about';
import Contact from './Compo/contact';
import Blog from './Compo/blog';
import Profile from './Compo/profile';
import Write from './Compo/write';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
export default class header extends Component{
    render(){
        
            return(
                <Router>
            <div>
                <Navbar bg="light" expand="lg">
              <Navbar.Brand ><NavLink exact activeStyle={{color:'orange'}}  to="/">Home</NavLink> </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                <Nav.Link ><NavLink activeStyle={{color:'orange'}} to="/contact">Contact US</NavLink></Nav.Link>
               <Nav.Link ><NavLink activeStyle={{color:'orange'}} to="/about">About US</NavLink></Nav.Link>
               <Nav.Link ><NavLink activeStyle={{color:'orange'}} to="/blog">Blog Post</NavLink></Nav.Link>
               <Nav.Link ><NavLink  activeStyle={{color:'orange'}} to="/profile">Profile</NavLink></Nav.Link>
             </Nav> 
          </Navbar.Collapse>
             </Navbar>
            </div>

            <Switch>
            <Route path="/write">
            <Write />
          </Route>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>

          <Route path="/">
            <App/>

          </Route>
        </Switch>
            </Router>
        )
       
        
    }
}