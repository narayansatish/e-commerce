import React, { useState} from 'react';

import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Row,Col,Container } from 'react-bootstrap';

import ReactDOM from 'react-dom';

function AddItem()
    {
        let [productName,setProductName]=useState("");
        let [category,setCategory]=useState("");
        let [pricePerUnit,setPricePerUnit]=useState("");
        let [status,setStatus]=useState("");
        let [description,setDescription]=useState("");
        let [count,setCount]=useState(localStorage.getItem("count")==null ? 0:parseInt(localStorage.getItem("count")));
        const storeTheDataInLocalStorage=()=>{
            let data={};
            setCount(()=>parseInt(count)+1);
            data["productName"]=productName;
            data["category"]=category;
            data["pricePerUnit"]=pricePerUnit;
            data["status"]=status;
            data["description"]=description;
            data["id"]=count;
            let dataString = JSON.stringify(data);
            localStorage.setItem(count, dataString);
            localStorage.setItem("count",count);
            setProductName("");
            setCategory("");
            setStatus("");
            setDescription("");
            setPricePerUnit("");

        };
return (<>
        <h1 className="text-center">E-comm Back Office</h1>
        <form className="ml-4 border border-dark ">
            <Row >
                <Col>
           
                    <div class="form-outline">
                        <input type="text" id="form3Example1" class="form-control" value={productName} onChange={(e)=>{setProductName(e.target.value)}}/>
                        <label class="form-label" for="form3Example1">Product Name</label>
                    </div>
                </Col>

                <Col>
                    <div class="form-outline">
                            <input type="text" id="form3Example2" class="form-control" value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
                            <label class="form-label" for="form3Example2">Category</label>
                    </div>
                </Col>

            </Row>
            <Row >
                <Col>
           
                    <div class="form-outline">
                        <input type="text" id="form3Example1" class="form-control" value={pricePerUnit} onChange={(e)=>{setPricePerUnit(e.target.value)}} />
                        <label class="form-label" for="form3Example1">Price Per Unit</label>
                    </div>
                </Col>

                <Col>
                    <div class="form-outline">
                            <input type="text" id="form3Example2" class="form-control" value={status} onChange={(e)=>{setStatus(e.target.value)}} />
                            <label class="form-label" for="form3Example2">Status</label>
                    </div>
                </Col>

            </Row>
            <Row >
                <Col>
           
                    <div class="form-outline">
                        <input type="text" id="form3Example1" class="form-control" onChange={(e)=>{setDescription(e.target.value)}} value={description} />
                        <label class="form-label" for="form3Example1">Product Description</label>
                    </div>
                </Col>

                

            </Row>
            <div className="text-center">
            <button type="button" class="btn btn-primary btn-rounded" onClick={storeTheDataInLocalStorage}>Add Item</button>
            </div>
        </form>
        
        </>);

    }
export default AddItem;