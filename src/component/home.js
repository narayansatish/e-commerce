import React from 'react';

import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Row,Col,Container } from 'react-bootstrap';

import ReactDOM from 'react-dom';
import Cart from './Cart';
import JumboTron from './JumboTron';
import NavBar from './NavBar';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol ,MDBBox} from 'mdbreact';

function Home()
    {
        
    return (<div>
            <NavBar/>
            <Row>
              <Col sm={{ span: 8, offset: 2 }}>
                <JumboTron/>
                <MDBBox display="flex">

                    <Cart/>
                
                </MDBBox>
              </Col>
            </Row>
            </div>);
    }
export default Home;