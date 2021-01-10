import React from 'react';

import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Row,Col,Container } from 'react-bootstrap';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import ReactDOM from 'react-dom';
function Card(props)
    { const AddToCart=()=>{
                            if(localStorage.getItem("cart")==null)
                                {
                                  let arr={};
                                  arr["productCount"]=1;
                                  arr["totalPrice"]=props.item.Price;
                                  props.item["count"]=1;
                                  arr[props.item.id]=props.item;
                                  let stringifyArr=JSON.stringify(arr);
                                  localStorage.setItem("cart",stringifyArr);
                                }
                            else
                                {
                                  let arr=localStorage.getItem("cart");
                                  arr=JSON.parse(arr);
                                  if(arr[props.item.id]==null)
                                    {
                                      arr["totalPrice"]=parseInt(arr["totalPrice"])+parseInt(props.item.Price);
                                      arr["productCount"]+=1;
                                      props.item["count"]=1;
                                      arr[props.item.id]=props.item;
                                      let stringifyArr=JSON.stringify(arr);
                                      localStorage.setItem("cart",stringifyArr);
                                    }
                                  else
                                    { arr["totalPrice"]=parseInt(arr["totalPrice"])+parseInt(props.item.Price);
                                      arr["productCount"]+=1;
                                      
                                      arr[props.item.id]["count"]+=1;
                                      let stringifyArr=JSON.stringify(arr);
                                      localStorage.setItem("cart",stringifyArr);
                                    }

                                }

                          
    
    
                          };

      let card=(<MDBCol>
        <MDBCard style={{ width: "15rem" }}>
          
          <MDBCardBody>
            <MDBCardTitle>{props.item.itemName+"/Rs"+props.item.Price}</MDBCardTitle>
            <MDBCardText>
              {props.item.Description}
            </MDBCardText>
            <MDBBtn  onClick={AddToCart} className="col" lg={{ span: 12, offset:0  }}>Add to cart</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>);
return card;
    }
export default Card;