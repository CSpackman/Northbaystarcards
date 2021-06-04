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
import {ShopContext} from '../context/shopContext'

const MyNavbar = ({colorScroll, fixed}) => {
var checkoutLength=0;
var amountOfItems =0;
const { checkout } = useContext(ShopContext)

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

useEffect(() =>{
  if(colorScroll==true){
    window.addEventListener('scroll', changeNavbarColor)
  }else if(colorScroll==false){
    setColorchange(true);

  }
  return () =>{
    window.removeEventListener('scroll', changeNavbarColor);
  }
  });


const changeNavbarColor = () => {
  if (window.scrollY >=80){
    setColorchange(true);
  }
  else {
    setColorchange(false);
  }
  }


      return(
      <div>
      <Navbar className= {colorChange ? 'navbar-scroll':'navbar-color'} expand="lg" fixed={fixedState()}>
        <Navbar.Brand href="" className="navbar-style">Northbay Star Cards</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navbar-style"  href="/" >Home</Nav.Link>
            <Nav.Link className="navbar-style"href="/cart">Cart: {amountOfItems}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>

)
}


export default MyNavbar
