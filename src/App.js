import { Route } from 'react-router-dom';
import './App.css';
import { Switch } from 'react-router-dom';
import UserComponent from './mobile/UserComponent';
import EditMobile from './mobile/EditMobileDetail'
import { MobileDetails } from './mobile/mobieDetails.';
import { Nopage } from './mobile/NoPage';
import { AddMobiles } from './mobile/addmobile';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css"
import { Login } from './pages/login';
import { Signup } from './pages/signuppage';
import { Forgot } from './pages/forgotpass';
import { Reset } from './pages/resetpassword';
import { Firstpage } from './pages/emtypage';

export const url ='https://mobile-back.onrender.com'




function App() {

  return (
    <div className="App">

      <Switch>
        <Route exact path='/'>
          <Firstpage/>
        </Route>
        <Route path="/dashboard">
          <UserComponent />
        </Route>
        <Route path ="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/forgotpassword">
          <Forgot/>
        </Route>
        <Route path="/resetpassword">
          <Reset/>
        </Route>

        <Route path="/addmobile">
          <AddMobiles />
        </Route>

        <Route path="/mobile/edit/:id">
          <EditMobile />
        </Route>


        <Route path="/mobile/:id">
          <MobileDetails />
        </Route>

        <Route path="**">
          <Nopage />
        </Route>
      </Switch>


    </div>
  );
}

export default App;