import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Image,Row,Col} from 'react-bootstrap';

function CartList()
    {   const increaseCount=()=>{
                                            console.log("Increase The Count");

                                };
                                
        const cartList=JSON.parse(localStorage.getItem("cart"));
        let cartListJsx=[];
        if(cartList==null);
        else
            {
                for (const [key, value] of Object.entries(cartList)) {
                    if(key!="productCount" ||key!="totalPrice")
                    {console.log(key,value);
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
                                        <p className="font-weight-bold col">-</p>
                                        <p className="col">{value["count"]}
                                        </p>
                                        <p className="font-weight-bold col" onClick={increaseCount}>+</p>
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
            console.log(cartListJsx);
            return cartListJsx;
    }
export default CartList;