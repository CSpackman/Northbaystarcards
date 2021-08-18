import '../App.css';
import React from 'react'
import Container from 'react-bootstrap/Container';
import MyNavbar from '../../src/components/Navbar.js'

const Header = () => {

      return(
      <div>
      <MyNavbar colorScroll= {true} fixed = {true}/>
      <br></br>
      <Container className = "intro" fluid>
      <h1>Welcome to Northbay Starcards</h1>
      </Container>
      </div>

)
}


export default Header
