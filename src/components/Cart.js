import React, { useContext, useEffect} from 'react'
import { Button, Container,  Row, Col, Image, Nav } from "react-bootstrap";
import {ShopContext} from '../context/shopContext'
import Footer from '../components/Footer.js';

const Cart = () => {

    const { checkout,  checkoutLineItemsRemove, addCommas } = useContext(ShopContext)
      var checkoutLength =0;
      var subTotal=0;
      var amountOfItems=0;
      function getCartLength(){
        try {
           checkoutLength =checkout.lineItems.length;
         }
         catch{
           checkoutLength=0;
         }
      }
      getCartLength();
      function calculateSubtotal(){
        for(var i=0; i<checkoutLength; i++){
            subTotal=subTotal+checkout.lineItems[i].variant.price.amount*checkout.lineItems[i].quantity;
            amountOfItems=amountOfItems+checkout.lineItems[i].quantity;
        }
      }
      calculateSubtotal();

      function deleteItem(checkoutId, lineItemIds){
        checkoutLineItemsRemove(checkoutId,lineItemIds);
      }

      useEffect(() => {
        console.log("checkout", checkout) 
      })



    if (checkoutLength>0) {
        return (
        <div>
        <Container fluid className="cart">
        <Row noGutters>
        <Col className="cart-items" lg={true}>
          {checkout.lineItems.map(item => (
           <Row key={item.id} className="cart-row">
                <Col className="cart-col">
                <Image src={item.variant.image.src} className="cart-items-images"/>
                </Col>
                <Col className="cart-col">
                <h1>{item.title}</h1>
                <h1>${addCommas(item.variant.price.amount)}</h1>
                <Button className="cart-remove-button" size="lg" onClick={()=> deleteItem(checkout.id, item.id)}>Remove From Cart</Button>
              </Col>
          </Row>
        ))}
        </Col>
        <Col className="cart-info">
        <h1>Subtotal({amountOfItems} Items): ${addCommas(checkout.lineItemsSubtotalPrice.amount)}</h1>
        <Button variant="primary" size="lg" block href={checkout.webUrl}>Checkout</Button>
        </Col>
        </Row>

        </Container>

        <Footer/>
      </div>
      )
    }
    if(checkoutLength===0){
      return(
        <div>

        <Container fluid className="cart-empty">
        <img src="cart3.svg" width="100" height="100" alt=""></img>
        <br></br>
          Your Cart Is Empty
          <br></br>
            <Nav.Link href="/" >Continue Shopping</Nav.Link>
        </Container>

        <Footer/>
        </div>
      )
    }


    return null

}

export default Cart
