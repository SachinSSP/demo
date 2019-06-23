import React, { Component } from 'react';
// import './App.css';
import { Switch, Route , BrowserRouter} from 'react-router-dom'
import UserList from './pages/UserList'
import Details from './pages/Details'
import AddUser from "./pages/addUser"
class App extends Component {
  render() {
    return (
        <BrowserRouter>
         <Switch>
           <div>
      <Route exact path='/' component={UserList}/>
      <Route path="/details/:info" component={Details}/>
      <Route path="/addUser" component={AddUser}/>
     
     </div>
     </Switch>
     </BrowserRouter>
    );
  }
}



export default App;