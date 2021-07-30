import '../App.css';
import React, { useEffect, useState, useContext } from 'react'
import {Image,Card, Button,Container} from 'react-bootstrap'
import { ShopContext } from '../context/shopContext'
import { Link, useParams } from 'react-router-dom'
import AddToCartButton from '../components/AddToCartButton.js'



const Item = ({product, size}) => {
const {addCommas, addItemToCheckout} = useContext(ShopContext)
  return(
    <div className="items">
    <Card style = {{ width: size, height:"630px"}} >
      <Card.Img  thumbnail className="items-image" src={product.images[0].src}/>
        <div className="items-title">
        <h1>{product.title}</h1>
        </div>
        <h2>${addCommas(product.variants[0].price)}</h2>
        <p>{product.description}</p>
         <Link to={`/product/${product.id}`}>
          <Button className="items-button" block >More Details</Button>
          </Link>
          <AddToCartButton  product={product} />
    </Card>
    <br></br>
    </div>
  )


}



export default Item
