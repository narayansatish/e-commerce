import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Image     ,Row,Col                        } from 'react-bootstrap';
import CartList from './CartList';
function MyCart()
    {
return (<div>
            <Row>
                <Col sm={{ span: 8, offset: 2 }}>
                    <h1 className="text-success ">Your Cart</h1>
                </Col>
            </Row>
            <div className=" border">
                <CartList/>
            </div>
            
        </div>);
    }
export default MyCart;