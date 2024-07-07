import '../App.css';
import React, { useContext } from 'react'
import {Button} from 'react-bootstrap'
import { ShopContext } from '../context/shopContext'



const AddToCartButton = ({product, sold}) => {
const { addItemToCheckout, checkout} = useContext(ShopContext)
var length;

function check(){
  if (!sold){
    console.log("sold", sold)
    return false;
  }

  try{
     length=checkout.lineItems.length;
  }catch{
     length =0;
  }
for( var i=0; i<length; i++){
    if(checkout.lineItems[i].title === product.title){
      return false
    }
}
  return true;
}


if(check()){
  return(
    <div>
    <Button className="items-button" m={{ y: '2rem' }} block onClick={() => {
      console.log("product", product)
      addItemToCheckout(product.variants[0].id, 1)
  
      
      // addItemToCheckout(product.id, 1)
    }}>Add To Cart</Button>
    </div>
  )
}else{
  return(
    <div>
      <Button className="items-button-sold" m={{ y: '2rem' }} block disabled>Sold Out</Button>
    </div>
  )
}



}
export default AddToCartButton
