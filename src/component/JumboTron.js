import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Image     ,Row,Col  ,Jumbotron } from 'react-bootstrap';
  function JumboTron()
    {return(
        <Row >
        <Col   className='mt-3'>
            <Jumbotron  style={{   minHeight: 300}} >

            </Jumbotron>
        </Col>
        </Row>
    )

    }
export default JumboTron;