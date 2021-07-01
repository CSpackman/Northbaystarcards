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





    if (!product.title) return (<h1>Loading</h1>)
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
            <Button rounded="0" shadow="3" bg="black500" m={{ y: '2rem' }} onClick={() => addItemToCheckout(product.variants[0].id, 1)}>Add To Cart</Button>
            </Col>
            </Row>
            </Container>
            </div>
    )
}

export default ProductPage
