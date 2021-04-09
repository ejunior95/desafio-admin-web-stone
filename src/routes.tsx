import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import Home from './pages/HomePage';
  import Login from './pages/LoginPage';
  import Cards from './pages/CardsPage';
  import Users from './pages/UsersPage';
  import Audits from './pages/AuditPage';
  import Analysts from './pages/AnalystsPage';
  import { AnalystContext } from './context/AnalystContext';
import SideMenu from './components/SideMenu';


export const Routes: React.FC = () => {
  const { isLogado } = useContext(AnalystContext);
  if (!isLogado) {
    return(
      <Router>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
      );  
  }
  
  return(

    <Router>

       <SideMenu />
    
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/cards">
        <Cards />
      </Route>
      <Route path="/audits">
        <Audits />
      </Route>
      <Route path="/analysts">
        <Analysts />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>

  );
};