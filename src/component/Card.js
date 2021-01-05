import React from 'react';

import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Row,Col,Container } from 'react-bootstrap';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import ReactDOM from 'react-dom';
function Card(props)
    {let card=(<MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardImage className="img-fluid"  waves />
          <MDBCardBody>
            <MDBCardTitle>{props.item.itemName+" "+props.item.price}</MDBCardTitle>
            <MDBCardText>
              {props.item.Description}
            </MDBCardText>
            <MDBBtn href="#">MDBBtn</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>);
return card;
    }
export default Card;