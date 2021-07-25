import '../App.css';
import React, { useEffect, useState, useContext } from 'react'
import {Navbar, Nav, Button, NavDropdown, Form, FormControl, Container} from 'react-bootstrap'
import { ShopContext } from '../context/shopContext'
import { Link, useParams } from 'react-router-dom'


const Filter = () => {

const { setFilter } = useContext(ShopContext);



  return(
    <div>
    <Navbar className="filter">
    <Nav className="filter">
    <Button  variant="light" onClick={()=>setFilter("All")}>All</Button>
    <Button  variant="light" onClick={()=>setFilter("Football")}>Football</Button>
    <Button  variant="light" onClick={()=>setFilter("Basketball")}>Basketball</Button>
    <Button  variant="light" onClick={()=>setFilter("Baseball")}>Baseball</Button>
    <Button  variant="light" onClick={()=>setFilter("Memorabilia")}>Memorabilia</Button>
    </Nav>
    </Navbar>
    </div>
  )
}



export default Filter
