import React, {useContext, useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import MyNavbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Image from 'react-bootstrap/Image'
import Profile from '../profilePic.jpg'
function AboutUs () {

console.log(Profile)
return(
  <div>
  <MyNavbar />
  <div className="aboutUs">
  <h1>ABOUT US</h1>
  <Container fluid>
    <Row>
      <Col md={12} lg={8}>
      <p>
      Valued Customers & Collectors,
      </p>

I have been collecting (buying, selling & trading) baseball cards for 40+ years. My father introduced me to collecting at a very young age. One of my earliest memories of collecting baseball cards was when I was in 3rd grade. I traded a bunch of 1977 Topps commons for a 1977 Topps Willie McCovey card… I learned to love trading at a very early age. My dad was also a collector and saved all his childhood cards. At one time he had every major baseball card set from 1948-1975. We spent countless hours sorting cards and putting cards in plastic 9-pocket pages as much needed missing cards arrived in the mail. As I got older, we spent many weekends at local card shows and card shops looking for deals, cards of our favorite players (Willie Mays & Roberto Clemente) and ones to complete our sets. By the time I was in high school, I had amassed a sizeable collection of my own; and in 1990 as my dad approached early retirement, he fulfilled a lifelong dream by opening up the first of two baseball card stores in Petaluma, CA and Cotati, CA named NorthBay Star Cards. Between my dad’s collection, my collection and my brother’s collection we had our starting inventory; and together we successful grew the business. Both stores remained open until the early 2000’s when most collectors moved to eBay for their collecting needs. My father continued the business on eBay until his passing in 2016. I have never stopped collecting and in honor of my dad; and to keep the tradition alive, I have decided to re-launch NorthBay Star Cards online (northbaystarcards.com). Born and raised in Northern California, coupled with 40+ years of hobby experience has allowed me to build a tremendous network of collectors. My focus and expertise are in vintage (pre-1975) baseball, football and basketball cards, in addition to sports memorabilia. If you don’t see what you are looking for, please let me know and I will do my best to help find it for you.
<br />
Thank You & Happy Collecting,
<br />

Jeff Spackman


      </Col>
      <Col className="aboutUs-col"md={12} lg={4}>
    <Image src={Profile}  fluid/>
      </Col>
    </Row>
  </Container>
  <br />
  </div>
  <Footer />
  </div>
)
}

export default AboutUs
