import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import { Link,Route, Switch,BrowserRouter   } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import AddItem from './component/AddItem';
import ItemList from './component/ItemList';

function App() {
  return (<div>
            <NavBar/>

            
            <>
            <Switch>
              <Route path="/"  component={Home} exact/>
              <Route path="/Add_Item"  component={AddItem} exact/>
              <Route path="/Item_List"  component={ItemList} exact/>
            </Switch>
            </>
      
        </div>);
}

export default App;
