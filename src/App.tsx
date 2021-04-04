import React, { useEffect, useState } from "react";
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

function App() {
  const [users, setUsers] = useState([]);
  const url =
    process.env.NODE_ENV === "production"
      ? "/api"
      : "http://localhost:3001/api";

  useEffect(() => {
    fetch(`${url}/users`)
      .then(function (response) {
        return response.json();
      })
      .then(setUsers);
  }, [url]);

  return(

    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
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
        </Switch>
      </Router>
          
    );
    {/* <p>{JSON.stringify(users)}</p> */}
}

export default App;
