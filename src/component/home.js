import React from 'react';

import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Row,Col,Container } from 'react-bootstrap';

import ReactDOM from 'react-dom';
import Cart from './Cart';
import JumboTron from './JumboTron';
import NavBar from './NavBar';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol ,MDBBox } from 'mdbreact';

function Home( props)
    {
        
    return (<div>
            
            <Row>
              <Col sm={{ span: 8, offset: 2 }}>
                <JumboTron/>
                <MDBBox className="d-flex  align-content-start w-100 mb-auto mt-auto mb-2 flex-wrap bd-highlight example-parent col-lg-12" style={{gap:15}} >

                    <Cart fun={props.fun}/>
                
                </MDBBox>
              </Col>
            </Row>
            </div>);
    }
export default Home;