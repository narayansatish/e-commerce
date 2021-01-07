import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Image,Row,Col} from 'react-bootstrap';

function CartList()
    {
        const cartList=JSON.parse(localStorage.getItem("cart"));
        let cartListJsx=[];
        if(cartList==null);
        else
            {
                for (const [key, value] of Object.entries(cartList)) {
                    if(key!="productCount" ||key!="totalPrice")
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
                                        </p><p className="font-weight-bold col">+</p>
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

            return cartListJsx;
    }
export default CartList;