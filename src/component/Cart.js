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
                          function make_card(value)
                            {
                              return (<Card item={value}/>)
                            }
                          let product_jsx;
                          product_jsx=Products.map(make_card);

                          return product_jsx;

                        }
export default Cart;