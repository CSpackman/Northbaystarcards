import '../App.css';
import React, { useContext } from 'react'
import {Card, Button} from 'react-bootstrap'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'
import AddToCartButton from '../components/AddToCartButton.js'



const Item = ({product, size}) => {
  function nameLength(){
    if(product.title.length>75){
      var productTitle=product.title.substring(0,72)+"...";
      return(productTitle);
    }if(product.title.length>!75){
    return(product.title);
  }
  }

  function descriptionLength(){
    if(product.description.length>=60){
      var productDescription=product.description.substring(0,57)+"..."
      return(productDescription);
    }if(product.description.length>!60){
    return(product.description);
  }
  }
    //<h>{descriptionLength()}</h>
const {addCommas} = useContext(ShopContext)
  return(
    <div className="items">
    <Card style = {{ width: size}} >
      <Card.Img   className="items-image" src={product.images[0].src}/>
        <div className="items-title">
        <h>{nameLength()}</h>
        </div>
        <div className="items-price">
        <h>${addCommas(product.variants[0].price)}</h>
        </div>
        <div className="items-description">

        </div>
        <div className="items-buttons">
         <Link to={`/product/${product.id}`}>
          <Button className="items-button" block >More Details</Button>
          </Link>
          <AddToCartButton  product={product} />
          </div>
    </Card>
    <br></br>
    </div>
  )


}



export default Item
