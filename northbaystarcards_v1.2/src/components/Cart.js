import React, { useContext, useState, useEffect } from 'react'
import { Button, Container, Dropdown, Collapse,  Row, Col, Image, DropdownButton } from "react-bootstrap";
import {ShopContext} from '../context/shopContext'

const Cart = () => {

    const { checkout, fetchCheckout,  checkoutLineItemsRemove, addCommas } = useContext(ShopContext)
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

      function deleteItem(checkoutId, lineItemIds){
        checkoutLineItemsRemove(checkoutId,lineItemIds);
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
                <Image src={item.variant.image.src} fluid/>
                </Col>
                <Col className="cart-col">
                <h1>{item.title}</h1>
                <h1>${addCommas(item.variant.price)}</h1>
                <Button variant="primary" size="lg" onClick={()=> deleteItem(checkout.id, item.id)}>Delete</Button>
              </Col>
          </Row>
        ))}
        </Col>
        <Col className="cart-info">
        <br></br>
          <h1>Subtotal({amountOfItems} Items): ${addCommas(subTotal)}</h1>
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