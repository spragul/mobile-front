import { Route } from 'react-router-dom';
import './App.css';
import { Switch } from 'react-router-dom';
import UserComponent from './mobile/UserComponent';
import EditMobile from './mobile/EditMobileDetail'
import { MobileDetails } from './mobile/mobieDetails.';
import { Nopage } from './mobile/NoPage';
import { AddMobiles } from './mobile/addmobile';






function App() {

  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          <UserComponent />
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