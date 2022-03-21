import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'


import Loading from '../components/Loading'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import MyNavbar from '../../src/components/Navbar.js'
import AddToCartButton from '../components/AddToCartButton.js'

const ProductPage = () => {
    let { id } = useParams()
    const { fetchProductWithId, product, addCommas } = useContext(ShopContext)


    useEffect(() => {
        fetchProductWithId(id)
        // fetchData()
        return () => {
            // setProduct(null)
        };
    }, [ fetchProductWithId, id])





    if (!product.title) return (<Loading />)
    return (
        <div className="product-section">
        <MyNavbar colorScroll={false}/>
        <Container className="container-no-overflow">
          <br></br>
          <h1 className="product-section">{product.title}</h1>
          <Row>
          <Col>
          <Carousel className="carousel" indicators={true} prevIcon ={<span aria-hidden="true" className="carousel-control-prev-icon" />}nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}>
          {product.images.map(image => (
            <Carousel.Item interval={3000} key={image.id} className="product-section-carousel">
            <div className="product-section-image">
            <img  src={image.src} alt="Second slide" />
            </div>
            </Carousel.Item>
            ))}
            </Carousel>
            </Col>
            <Col>
            <h1 className="product-section">${addCommas(product.variants[0].price)}</h1>
            <p>{product.description}</p>
            {/* <AddToCartButton product={product} /> */}
            </Col>
            </Row>
            </Container>
            <br></br>
            </div>

    )
}

export default ProductPage
