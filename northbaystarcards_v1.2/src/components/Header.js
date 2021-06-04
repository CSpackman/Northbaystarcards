import '../App.css';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Client from 'shopify-buy';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import MyNavbar from '../../src/components/Navbar.js'

const Header = () => {

      return(
      <div>
      <Container className = "intro" fluid="100%">
      <MyNavbar colorScroll= {true} fixed = {true}/>
      </Container>





      </div>

)
}


export default Header
