import React from 'react';

import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Row,Col,Container } from 'react-bootstrap';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import ReactDOM from 'react-dom';
function Card(props)
    {let card=(<MDBCol>
        <MDBCard style={{ width: "15rem" }}>
          <MDBCardImage className="img-fluid" src="https://image.shutterstock.com/image-photo/new-york-usa-december-07-260nw-235967407.jpg"  />
          <MDBCardBody>
            <MDBCardTitle>{props.item.itemName+"/Rs"+props.item.Price}</MDBCardTitle>
            <MDBCardText>
              {props.item.Description}
            </MDBCardText>
            <MDBBtn  onClick={()=>{console.log(props.item.itemName);}} className="col" lg={{ span: 12, offset:0  }}>Add to cart</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>);
return card;
    }
export default Card;