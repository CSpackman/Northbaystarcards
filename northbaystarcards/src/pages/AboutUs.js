import React, {useContext, useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import MyNavbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import ProfilePic from '../profilePic.jpg'
function AboutUs () {


return(
  <div>
  <MyNavbar />
  <div className="aboutUs">
  <h1>ABOUT US</h1>
  <Container fluid>
    <Row>
      <Col sm={8}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>
      <Col>
    <img src={ProfilePic} height="400px;" width="225px;"/>
      </Col>
    </Row>
  </Container>
  <br />
  </div>
  <Footer />
  </div>
)
}

export default AboutUs
