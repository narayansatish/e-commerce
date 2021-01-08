import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Image,Row,Col} from 'react-bootstrap';

function CartList()
    {   
        let [myCart,setMyCart]=useState(null);
        let [refresh,setRefresh]=useState(0);
        const increaseCount=(e)=>{  
                                    let key= e.target.id;
                                    let arr=JSON.parse(localStorage.getItem("cart"));
                                    let value=arr[key];
                                    
                                    console.log(value);
                                    arr["totalPrice"]=parseInt(arr["totalPrice"])+parseInt(value["Price"]);
                                    arr["productCount"]+=1;
                                      
                                    value["count"]+=1;
                                    let stringifyArr=JSON.stringify(arr);
                                    localStorage.setItem("cart",stringifyArr);
                                    setRefresh(refresh==0 ? 1:0);
                                            

                                };
        const decreaseCount=(e)=>{  
                                    let key= e.target.id;
                                    let arr=JSON.parse(localStorage.getItem("cart"));
                                    let value=arr[key];
                                    
                                    console.log(value);
                                    arr["totalPrice"]=parseInt(arr["totalPrice"])-parseInt(value["Price"]);
                                    arr["productCount"]-=1;
                                      
                                    value["count"]-=1;
                                    if(value["count"]==0)
                                        delete arr[key];
                                    let stringifyArr=JSON.stringify(arr);
                                    localStorage.setItem("cart",stringifyArr);
                                    setRefresh(refresh==0 ? 1:0);
                                            

                                };
        const cartList=JSON.parse(localStorage.getItem("cart"));
        let cartListJsx=[];
        useEffect ( ()=>{                     
        const cartList=JSON.parse(localStorage.getItem("cart"));
        let cartListJsx=[];
        if(cartList==null);
        else
            {
                for (const [key, value] of Object.entries(cartList)) {
                    if(key!="productCount" && key!="totalPrice")
                    {
                     
                     cartListJsx.push(
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <img src={value["image"]}></img>
                                    </Col>
                                    <Col>
                                        <p>{value["itemName"]}</p>
                                    </Col>
                                    <Col>
                                        <Row>
                                        <p className="font-weight-bold col" id={key} onClick={decreaseCount}>-</p>
                                        <p className="col">{value["count"]}
                                        </p>
                                        <p className="font-weight-bold col" id={key} onClick={increaseCount}>+</p>
                                        </Row>
                                    </Col>
                                    <Col>
                                            {value["count"]*value["Price"]}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    );
                    }

                  }
                  
            }
          setMyCart(cartListJsx);  
        },[refresh]);
           
            return myCart;
    }
export default CartList;