import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import React, { useState} from 'react';
import { Link,Route, Switch,BrowserRouter   } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import AddItem from './component/AddItem';
import ItemList from './component/ItemList';
import MyCart from './component/MyCart';

function App() {
  const [refresh,setRefresh]=useState(0);
  const updateRefresh=()=>{
setRefresh(refresh==0?1:0);
  };
  return (<div>
            <NavBar/>
            
            <span class="glyphicon glyphicon-minus"></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>

            
            <>
            <Switch>
              <Route path="/"  component={()=><Home fun ={updateRefresh}/>} exact/>
              <Route path="/Add_Item"  component={AddItem} exact/>
              <Route path="/Item_List"  component={ItemList} exact/>
              <Route path="/MyCart"  component={()=><MyCart fun ={updateRefresh}/>}exact/>
            </Switch>
            </>
            
        </div>);
}

export default App;
