import '../App.css';
import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Client from 'shopify-buy';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = () => {

var setState;

var elementClass;

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if(window.scrollY<100){
        elementClass = className('nav-color');
      }else {
        elementClass = className('nav-scrolled');
      }

      return ()=>{
        //document.removeEventListener("scroll", listener)
    }
  });
});



    return(
      <div>
      <Container className = "intro" fluid="100%">
      <Navbar className={this.elementClass} expand="lg" fixed='top'>
        <Navbar.Brand href="">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Link</Nav.Link>
          </Nav>


        </Navbar.Collapse>
      </Navbar>
      <br></br>

      </Container>





      </div>
    )

}

export default Header
