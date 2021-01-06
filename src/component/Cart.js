import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Image     ,Row,Col  ,Jumbotron } from 'react-bootstrap';
import  { Products } from './productList';
import Card from './Card';
  function Cart()
                        {
                          

                          return (<>
                          {Products.map((value)=><Card item={value}/>)}
                          </>);

                        }
export default Cart;