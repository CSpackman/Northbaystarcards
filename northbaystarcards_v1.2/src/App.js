import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Client from 'shopify-buy';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import Header from "./components/Header"
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

import Cart from './components/Cart'
import MyNavbar from '../src/components/Navbar.js'
import ShopProvider from './context/shopContext'

function App() {
  return (
    <ShopProvider>
    <Router>
              <Switch>
                <Route path="/product/:id">
                      <ProductPage />
                </Route>
                <Route path="/cart">
                <MyNavbar colorScroll={false}/>
                    <Cart />
                </Route>

                <Route path="/">
                <Header />
                <HomePage />
          
                </Route>
              </Switch>
            </Router>
  </ShopProvider>
  );
}

export default App;