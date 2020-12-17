import AddUser from './pages/AddUser'
import EditUser from './pages/EditUser'
import ItemHome from './pages/ItemHome'
import Landing from './pages/Landing'
import Login from './pages/Login'
import UserHome from './pages/UserHome'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/users/edit" component={EditUser}/>
            <Route path="/users/add" component={AddUser}/>
            <Route path="/users" component={UserHome}/>
            <Route path="/items" component={ItemHome}/>
            <Route path="/" component={Landing}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
