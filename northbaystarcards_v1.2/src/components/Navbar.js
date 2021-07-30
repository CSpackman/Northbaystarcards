import '../App.css';
import React, { useEffect, useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Client from 'shopify-buy';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Modal, ModalHeader, ModalTitle, ModalBody} from 'react-bootstrap'
import {ShopContext} from '../context/shopContext'

const MyNavbar = ({colorScroll, fixed}) => {
var checkoutLength=0;
var amountOfItems =0;
const { checkout } = useContext(ShopContext)
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

function getCartLength(){
  try {
     checkoutLength =checkout.lineItems.length;
   }catch{
     checkoutLength=0;
   }
}
getCartLength();
function calculateAmount(){
  for(var i=0; i<checkoutLength; i++){
      amountOfItems=amountOfItems+checkout.lineItems[i].quantity;
  }
}
calculateAmount();


 const [colorChange, setColorchange] = useState(false);
var sticky
function fixedState(){
  if(fixed==true){
    var sticky= "top"
  }else{
    var sticky ="";
  }
  return sticky;
}
/*
useEffect(() =>{
  if(colorScroll==true){
    window.addEventListener('scroll', changeNavbarColor)
  }else if(colorScroll==false){
    setColorchange(true);

  }
  if(window.innerWidth<=1000){
    changeNavbarColor();
  }
  return () =>{
    window.removeEventListener('scroll', changeNavbarColor);
  }
  });


const changeNavbarColor = () => {
  if (window.scrollY >=80|| window.innerWidth<=1000){
    setColorchange(true);
  }
  else {
    setColorchange(false);
  }
  }
*/

      return(
      <div>
      <Navbar className= "navbar-style" expand="lg" fixed={fixedState()}>
        <Navbar.Brand href="/" className="navbar-style">Northbay Starcards</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto navbar-box">
            <Nav.Link className="navbar-link"  href="/" >Home</Nav.Link>
              <Nav.Link className="navbar-link"  onClick={handleShow} >Contact</Nav.Link>
            <Nav.Link className="navbar-link"href="/cart">Cart: {amountOfItems}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h5>Jeff Spackman</h5>
        <a href="tel:650-465-1398">Phone: (650) 465-1398</a>
        <br></br>
        <a href = "mailto: jeff.spackman@gmail.com">Email: jeffspackman21@gmail.com</a>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
      </div>

)
}


export default MyNavbar
