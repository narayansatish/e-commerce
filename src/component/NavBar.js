import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Image     ,Row,Col                        } from 'react-bootstrap';

  function NavBar()
    { let nav=(
        <div>
            <Row>
                <Col lg={12}>
                    
                        <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
                            <Navbar.Brand href="#home">E-Comm-App</Navbar.Brand>
                           
                         <Nav  >
                            <Nav.Item>
                            <Image src="holder.js/171x180" class="rounded" />
                            </Nav.Item>
                         </Nav>   
                        
                       </Navbar>
            
                </Col>

            </Row>
        </div>
    )  ;
return nav;
    }
export default NavBar;