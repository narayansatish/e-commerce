import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Image     ,Row,Col  ,Jumbotron } from 'react-bootstrap';

import Card from './Card';
  function Cart(props)
                        {
                          let Products=[];
                          
                          let productList=JSON.parse(localStorage.getItem("products")),temp;
                          if(productList!=null)
                              {   
                                  for (const [key, value] of Object.entries(productList))
                                      {
                                          if(key!="count")
                                              {let data={};
                                               data["itemName"]=value["productName"];
                                               data["Description"]=value["description"];
                                               data["id"]=value["id"];
                                               data["Category"]=value["category"];
                                               data["Price"]=value["pricePerUnit"];
                                               Products.push(data);
                                              }
                                      }
                              }

                          return (<>
                          {Products.map((value)=><Card item={{"val":value,"fun":props.fun}}/>)}
                          </>);

                        }
export default Cart;