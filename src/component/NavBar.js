import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Image     ,Row,Col                        } from 'react-bootstrap';

  function NavBar()
    { let nav=(
        <div>
            <Row>
                <Col lg={12}>
                    
                        <Navbar bg="warning" variant="dark" expand="lg" sticky="top">
                            <Navbar.Brand ><Link to="/">E-Comm-App</Link></Navbar.Brand>
                           
                         <Nav  className="ml-auto text-white">
                            <Nav.Item className="px-2">
                            <Link to="/Add_Item">Add item</Link>
                            </Nav.Item>
                            <Nav.Item className="px-2">
                            <Link to="/Item_List">Item List</Link>
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