import '../App.css';
import React, { useContext } from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'
import { ShopContext } from '../context/shopContext'


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