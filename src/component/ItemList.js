import React from 'react';

import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Row,Col,Container } from 'react-bootstrap';

import ReactDOM from 'react-dom';

function ItemList()
    {   
        const populateTable=()=>{
            let count=localStorage.getItem("count"),temp,tableContent=[];
            if(count!=null)
                for(let i=1;i<=count;i++)
                    {
                    temp=localStorage.getItem(i);
                    temp=JSON.parse(temp);
                    tableContent.push(temp);

                    }
            return tableContent;
            console.log(tableContent);
        };

        return (<>
        <table class="table mt-3">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Product Name</th>
      <th scope="col">Category</th>
      <th scope="col">pricePerUnit</th>
      <th scope="col">Status</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
    <tbody>
            {(populateTable()).map((item)=>
                <tr>
                <th scope="row">{item["id"]}</th>
                <td>{item["productName"]}</td>
                <td>{item["category"]}</td>
                <td>{item["pricePerUnit"]}</td>
                <td>{item["status"]}</td>
                <td>{item["description"]}</td>
                </tr>
            )}
    </tbody>
</table>
        </>);
    }
export default ItemList;