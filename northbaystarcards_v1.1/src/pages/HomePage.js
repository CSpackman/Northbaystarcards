import React, {useContext, useEffect} from 'react';
import {ShopContext} from '../context/shopContext'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'


const HomePage = () => {
  const { fetchAllProducts, products, addItemToCheckout } = useContext(ShopContext)
  var productsFirst=[];
  var productsSecond=[];
  var productsThird=[];
  useEffect(() => {
          fetchAllProducts()
          return () => {
              // cleanup
          };
      }, [fetchAllProducts])
  function layout(){
    const {innerWidth: width, innerHeight: height} = window;


    if(width>=992){
      productsFirst = products.slice(0,products.length/3)
      productsSecond = products.slice(products.length/3,2*products.length/3)
      productsThird = products.slice(2*products.length/3,products.length)
      console.log("first"+productsFirst)
    }

    return(
      width
    )
  }
  const width = layout()
      if(!products) return <div>Loading...</div>
        if(width<576){
          return (
            <div>
              <Container fluid>
                <Col>
                  {products.map(product => (
                    <Card>{product.title}
                      <Image src={product.images[0].src}></Image>
                        {product.variants[0].price}
                          <Button rounded="0" shadow="3" bg="black500" m={{ y: '2rem' }} onClick={() => addItemToCheckout(product.variants[0].id, 1)}>Add To Cart</Button>
                    </Card>
                    ))}
                  </Col>
              </Container>
            </div>
          )} else if(width>=992){
    return(
      <div>
      <Container fluid>
      <Row>
          <Col>
          {productsFirst.map(product => (
            <div>
            <Card style = {{ width: '18rem' }}>{product.title}
              <Image src={product.images[0].src}></Image>
                ${product.variants[0].price}
                <Button rounded="0" shadow="3" bg="black500" m={{ y: '2rem' }} onClick={() => addItemToCheckout(product.variants[0].id, 1)}>Add To Cart</Button>
            </Card>
            <br></br>
            </div>
            ))}
          </Col>
          <Col>
              <Card>
              {productsSecond.map(product => (
                <div>
                <Card style = {{ width: '18rem' }}>{product.title}
                  <Image src={product.images[0].src}></Image>
                    ${product.variants[0].price}
                    <Button rounded="0" shadow="3" bg="black500" m={{ y: '2rem' }} onClick={() => addItemToCheckout(product.variants[0].id, 1)}>Add To Cart</Button>
                </Card>
                <br></br>
                </div>
                ))}
              </Card>
            </Col>
            <Col>
              <Card>
              {productsThird.map(product => (
                <div>
                <Card style = {{ width: '18rem' }}>{product.title}
                  <Image src={product.images[0].src}></Image>
                    ${product.variants[0].price}
                    <Button rounded="0" shadow="3" bg="black500" m={{ y: '2rem' }} onClick={() => addItemToCheckout(product.variants[0].id, 1)}>Add To Cart</Button>
                </Card>
                <br></br>
                </div>
                ))}
              </Card>
              </Col>
              </Row>
      </Container>
      </div>
    )
}
}

export default HomePage
