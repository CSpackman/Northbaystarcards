import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Client from 'shopify-buy';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Header from "./components/Header"
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

import Cart from './components/Cart'

import ShopProvider from './context/shopContext'

function App() {
  return (
    <ShopProvider>
    <Header> </Header>
    <HomePage></HomePage>
  </ShopProvider>
  );
}

export default App;
