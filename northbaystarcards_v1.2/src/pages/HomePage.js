import React, {useContext, useEffect, useState} from 'react';
import {ShopContext} from '../context/shopContext'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import { Link, useParams } from 'react-router-dom'
import Item from "../../src/components/items.js"

function HomePage () {

  let {id} = useParams();
  const { fetchAllProducts, products, addItemToCheckout } = useContext(ShopContext)
  var productsFirst=[];
  var productsSecond=[];
  var productsThird=[];
  var [width, setWidth] = useState(window.innerWidth);
  layout();

  useEffect(() => {
          fetchAllProducts()
          layout();
            window.addEventListener('resize',resize)
          return () => {
            window.removeEventListener('resize',resize)
          };
      }, [fetchAllProducts, id])
      const resize = () => {
        setWidth(window.innerWidth);
    };

  function layout(){


    if(window.innerWidth>=768&&window.innerWidth<992){
      productsFirst = products.slice(0,products.length/2)
      productsSecond = products.slice(products.length/2,2*products.length/2)
    }
    if(window.innerWidth>=992){
      productsFirst = products.slice(0,products.length/3)
      productsSecond = products.slice(products.length/3,2*products.length/3)
      productsThird = products.slice(2*products.length/3,products.length)
    }

  }

      if(!products) return <div>Loading...</div>
        if(width<768){
          return (
            <div>
              <Container fluid>
            <Col className="md">
            {products.map(product => (
              <Item product = {product} size={"18rem"}/>
              ))}
            </Col>
              </Container>
            </div>

    )} else if (width>=768&&width<992) {
      return(
        <div>
          <Container fluid>
          <Row>
              <Col className="md">
              {productsFirst.map(product => (
                <Item product = {product} size={"18rem"}/>
                ))}
              </Col>
              <Col className="md">
              {productsSecond.map(product => (
                <Item product = {product} size={"18rem"}/>
                ))}
              </Col>
              </Row>
          </Container>
          </div>
      )

    }
     else if(width>=992){
return(
    <div>
      <Container fluid>
      <Row>
          <Col className="md">
          {productsFirst.map(product => (
            <Item product = {product} size={"18rem"}/>
            ))}
          </Col>
          <Col className="md">
          {productsSecond.map(product => (
            <Item product = {product} size={"18rem"}/>
            ))}
          </Col>
          <Col className="md">
          {productsThird.map(product => (
            <Item product = {product} size={"18rem"}/>
            ))}
          </Col>
              </Row>
      </Container>
      </div>






    )
}
}

export default HomePage
