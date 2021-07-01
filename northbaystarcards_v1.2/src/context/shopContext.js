import React, { Component } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();

const client = Client.buildClient({
  storefrontAccessToken: "9032bf70b61916849fe2fd029e49684f",
  domain: "northbaystarcards.myshopify.com",
});

//dd4d4dc146542ba7763305d71d1b3d38
//graphql.myshopify.com

//northbaystarcards.myshopify.com
//9032bf70b61916849fe2fd029e49684f

class ShopProvider extends Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
    test: "test"
  };

  componentDidMount() {

    //Check if localStorage has a checkout_id saved
    if (localStorage.checkout) {
      this.fetchCheckout(localStorage.checkout);
    } else {
      this.createCheckout();
    }
    //if there is no checkout_id in localStorage then we will create a new checkout

    //else fetch the checkout from shopify
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout", checkout.id);
    await this.setState({ checkout: checkout });
  };

  fetchCheckout = async (checkoutId) => {
    client.checkout
      .fetch(checkoutId)
      .then((checkout) => {
        this.setState({ checkout: checkout });
      })
      .catch((err) => console.log(err));
  };

  addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemsToAdd
    );


    this.setState({ checkout: checkout });
    console.log(checkout);
    console.log(checkout.lineItems[0].quantity)
    console.log(checkout.lineItems.length)
  };

  checkoutLineItemsRemove = async (checkoutId, lineItemIds) => {
  client.checkout.removeLineItems(checkoutId, lineItemIds).then((checkout) => {
  this.setState({ checkout: checkout });
});

  };



  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products: products });
  };

  fetchProductWithId = async (id) => {
    const product = await client.product.fetch(id);
    this.setState({ product: product });
    //console.log(JSON.stringify(product));

    return product;
  };

   addCommas(x){
    var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
  }



  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithId: this.fetchProductWithId,
          addItemToCheckout: this.addItemToCheckout,
          checkoutLineItemsRemove: this.checkoutLineItemsRemove,
          addCommas: this.addCommas,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
