import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Loading from '../components/Loading'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import MyNavbar from '../../src/components/Navbar.js'
import AddToCartButton from '../components/AddToCartButton.js'
import Footer from "../components/Footer.js"
const ProductPage = () => {
    let { id } = useParams()
    const { fetchProductWithId, addItemToCheckout, product, addCommas } = useContext(ShopContext)


    useEffect(() => {
        fetchProductWithId(id)
        // fetchData()
        return () => {
            // setProduct(null)
        };
    }, [ fetchProductWithId, id])





    if (!product.title) return (<Loading />)
    return (
        <div>
        <MyNavbar colorScroll={false}/>
        <Container className="container-no-overflow">
          <br></br>
          <h1>{product.title}</h1>
          <Row>
          <Col>
          <Carousel>
          {product.images.map(image => (
            <Carousel.Item interval={1000} key={image.id}>
            <Image className="img-fluid" src={image.src} alt="Second slide" fluid/>
            </Carousel.Item>
            ))}
            </Carousel>
            </Col>
            <Col>
            <h1>${addCommas(product.variants[0].price)}</h1>
            <p>{product.description}</p>
            <AddToCartButton product={product} />
            </Col>
            </Row>
            </Container>
            <br></br>
            <Footer />
            </div>

    )
}

export default ProductPage
