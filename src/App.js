import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";

function App() {
  // use local variable in CodeSandbox example
  const isAdmin = true;

  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <p>User Role: {isAdmin ? "Admin" : "User"}</p>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/customers">
              <Customers />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
