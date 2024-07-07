import React, { Component } from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext();

// const client = new shopify.clients.Rest({ session });
// const response = client.get({ path: 'shop' });

const client = Client.buildClient({
  storefrontAccessToken: "9032bf70b61916849fe2fd029e49684f",
  domain: "northbaystarcards.myshopify.com",
  apiVersion: '2023-10',
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
		filter: 'All',
		checkoutId: ''
	};

		componentDidMount() {
			console.log("Mounted")
		//Check if localStorage has a checkout_id saved
		if (localStorage.checkout) {
			console.log(localStorage.checkout)
			console.log("fetching checkout")
			this.fetchCheckout(localStorage.checkout);
		} else {
			console.log("Create checkout")
			this.createCheckout();
			console.log("checkout id", this.checkoutId)
		}
		//if there is no checkout_id in localStorage then we will create a new checkout

		//else fetch the checkout from shopify
	}

	createCheckout = async () => {
		console.log("Creating checkout")
		client.checkout.create().then(checkout => {
			console.log(checkout)
			localStorage.setItem('checkout', checkout.id);
			this.setState({ checkout: checkout });
			this.setState({ checkoutId: checkout.id });
		});
		// const checkout = await client.checkout.create();
		// localStorage.setItem("checkout", checkout.id);
		// await this.setState({ checkout: checkout });
	};

	fetchCheckout = async checkoutId => {
		client.checkout
			.fetch(checkoutId)
			.then(checkout => {
				console.log("checkout id: ", checkout);
				this.setState({ checkout: checkout });
			})
			.catch(err => console.log(err));
	};

	addItemToCheckout = async (variantId, quantity) => {
		
		const lineItemsToAdd = [
			{
				variantId,
				quantity: parseInt(quantity, 10)
			}
		];
		// console.log(this);
		// client.checkout.addLineItems(this.checkoutId, lineItemsToAdd).then(checkout => {
		// 	this.setState({ checkout: checkout });
		// 	// console.log(this.checkoutId); // Array with one additional line item
		// });

		const checkout = await client.checkout.addLineItems(
		  this.state.checkout.id,
		  lineItemsToAdd
		);
		this.setState({ checkout: checkout });
	};

	checkoutLineItemsRemove = async (checkoutId, lineItemIds) => {
		client.checkout.removeLineItems(checkoutId, lineItemIds).then(checkout => {
			this.setState({ checkout: checkout });
		});
	};

	fetchAllProducts = async () => {
		const products = await client.product.fetchAll();
		console.log("products: ", products)
    console.log("client",(client.collection.fetchAll));
		this.setState({ products: products });
	};

	fetchProductWithId = async id => {
		const product = await client.product.fetch(id);
		console.log("fetch product",product)	
		this.setState({ product: product });

		return product;
	};

	addCommas(x) {
		var parts = x.toString().split('.');
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		return parts.join('.');
	}

	setFilter = string => {
		this.setState({ filter: string });
	};

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
					setFilter: this.setFilter
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
