import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Image,Row,Col} from 'react-bootstrap';

function CartList(props)
    {   
        let [myCart,setMyCart]=useState(null);
        let [refresh,setRefresh]=useState(0);
        const payment=()=>{var options = {
            amount: 50000,  // amount in the smallest currency unit
            currency: "INR",
            receipt: "order_rcptid_11"
          };
          instance.orders.create(options, function(err, order) {
            console.log(order);
          });

        };
        const increaseCount=(e)=>{  
                                    let key= e.target.id;
                                    let arr=JSON.parse(localStorage.getItem("cart"));
                                    let value=arr[key];
                                    
                                    console.log(value);
                                    arr["totalPrice"]=parseInt(arr["totalPrice"])+parseInt(value["Price"]);
                                    arr["productCount"]+=1;
                                      
                                    value["count"]+=1;
                                    arr[key]=value;
                                    let stringifyArr=JSON.stringify(arr);
                                    localStorage.setItem("cart",stringifyArr);
                                    (props.fun)();
                                            

                                };
        const decreaseCount=(e)=>{  
                                    let key= e.target.id;
                                    let arr=JSON.parse(localStorage.getItem("cart"));
                                    let value=arr[key];
                                    
                                    console.log(value);
                                    arr["totalPrice"]=parseInt(arr["totalPrice"])-parseInt(value["Price"]);
                                    arr["productCount"]-=1;
                                      
                                    value["count"]-=1;
                                    arr[key]=value;
                                    if(value["count"]==0)
                                        delete arr[key];
                                    let stringifyArr=JSON.stringify(arr);
                                    localStorage.setItem("cart",stringifyArr);
                                    
                                    (props.fun)();       

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
                                        <img class="img-responsive" src={value["image"]}></img>
                                    </Col>
                                    <Col>
                                        <p>{value["itemName"]}</p>
                                    </Col>
                                    <Col>
                                        <Row>
                                        <Button className="btn btn-danger col" id={key} onClick={decreaseCount}>-</Button>
                                        <p className="col">{value["count"]}
                                        </p>
                                        <Button className="col btn btn-primary" id={key} onClick={increaseCount}>+</Button>
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
            if(cartListJsx.length!=0)
                cartListJsx.push(<Row>
                    <Col lg={{ span: 5, offset: 7 }}>
                     <h3>Subtotal({JSON.parse(localStorage.getItem("cart"))["productCount"]}item):{JSON.parse(localStorage.getItem("cart"))["totalPrice"]}</h3>
                      <Button className="col btn btn-success" onClick={payment}>Pay</Button>
                    </Col>
                </Row>);
          setMyCart(cartListJsx);  
        },[refresh]);
           
            return myCart;
    }
export default CartList;