import React, { useContext } from 'react'
import { Button, Container, Dropdown, Collapse} from "react-bootstrap";
import {ShopContext} from '../context/shopContext'

const Cart = () => {

    const { isCartOpen, closeCart, checkout } = useContext(ShopContext)

    if (checkout.lineItems) {
        return (
          <div><a href={checkout.webUrl} onClick={checkout.webUrl}>
          Click ME</a></div>
        )
    }

    return null

}

export default Cart
