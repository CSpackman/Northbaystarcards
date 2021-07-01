import '../App.css';
import React, { useEffect, useState, useContext } from 'react'
import {Image,Card, Button} from 'react-bootstrap'
import { ShopContext } from '../context/shopContext'
import { Link, useParams } from 'react-router-dom'



const Item = ({product, size}) => {
const {addCommas, addItemToCheckout} = useContext(ShopContext)

  return(
    <div className="items">
    <Card style = {{ width: size }}>
      <Image src={product.images[0].src} thumbnail></Image>
          <h1 className="items">{product.title}</h1>
        <h2 className= "items">${addCommas(product.variants[0].price)}</h2>
        <p>{product.description}</p>
         <Link to={`/product/${product.id}`}>
          <Button  rounded="0" shadow="3" bg="black500"  block >More Details</Button>
          </Link>
          <Button className="items-button" rounded="0" shadow="3" bg="black500" m={{ y: '2rem' }} onClick={() => addItemToCheckout(product.variants[0].id, 1)}>Add To Cart</Button>
    </Card>
    <br></br>
    </div>
  )


}



export default Item
