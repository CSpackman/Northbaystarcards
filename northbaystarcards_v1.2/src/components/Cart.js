import React, { useContext, useState, useEffect } from 'react'
import { Button, Container, Dropdown, Collapse,  Row, Col, Image, DropdownButton } from "react-bootstrap";
import {ShopContext} from '../context/shopContext'

const Cart = () => {

    const { checkout, fetchCheckout } = useContext(ShopContext)
      var checkoutLength =0;
      var subTotal=0;
      var amountOfItems=0;
      function getCartLength(){
        try {
           checkoutLength =checkout.lineItems.length;
         }catch{
           checkoutLength=0;
         }
      }
      getCartLength();
      function calculateSubtotal(){
        for(var i=0; i<checkoutLength; i++){
            subTotal=subTotal+checkout.lineItems[i].variant.price*checkout.lineItems[i].quantity;
            amountOfItems=amountOfItems+checkout.lineItems[i].quantity;
        }
      }
      calculateSubtotal();
      function changeQuanity(){
        console.log("hi")
      }



    if (checkoutLength>0) {
        return (
        <div>
        <Container fluid>
        <Row noGutters>
        <Col className="cart-items" lg={true}>
          {checkout.lineItems.map(item => (
           <Row key={item.id} className="cart-row">
                <Col className="cart-col">
                <Image src={item.variant.image.src} thumbnail/>
                </Col>
                <Col className="cart-col">
                <h1>{item.title}</h1>
                <h1>${item.variant.price}</h1>
                <DropdownButton id="dropdown-basic-button" title={'Qty: ' + item.quantity}>
                <Dropdown.Item onClick= {changeQuanity}>1</Dropdown.Item>
                <Dropdown.Item onClick= {changeQuanity}>2</Dropdown.Item>
                <Dropdown.Item onClick= {changeQuanity}>3</Dropdown.Item>
                </DropdownButton>
              </Col>
          </Row>
        ))}
        </Col>
        <Col className="cart-info">
        <h1>Hi</h1>
          <h1>Subtotal({amountOfItems} Items): ${subTotal}</h1>
            <h1>Hi</h1>
        <Button variant="primary" size="lg" block href={checkout.webUrl}>
        Checkout
      </Button>
        </Col>
        </Row>

        </Container>
      </div>
      )
    }
    if(checkoutLength===0){
      return(
        <div>
        Cart is empty
        </div>
      )
    }


    return null

}

export default Cart
