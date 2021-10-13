import '../App.css';
import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Header = () => {

      return(
      <div>
      <Container fluid className="footer">
      <Row>
      <Col className="footer-col" md>
      <h1>NorthBay StarCards</h1>
      <p>Founder: Jeff Spackman</p>
      <p>Phone: (650) 465-1398</p>
      <p>Email: jeffspackman21@gmail.com</p>
      </Col>

      <Col className="footer-col" md>
      <h1>Fast, Reliable </h1>
      <p>NorthBay StarCards has been a family buissness selling and trading cards for over the past 30 years!! </p>
      <p>Serving the Bay Area and the entire United States!</p>
      </Col>

      <Col md>
      <h1>Website Design</h1>
      <p>Designed by Connor Spackman</p>
      <p><a href="tel:650-690-1491">Phone: (650) 690-1491</a></p>
      <p><a href = "mailto: connorspackman21@gmail.com">Email: connorspackman21@gmail.com</a></p>
      </Col>
      </Row>
      </Container>
      </div>

)
}


export default Header
