import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from './images/logo.jpeg'

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navBar">
            <div className = "logo">
              <Link className= 'navbar-brand' to ={'/tutorials'}>
              <img src = {logo} alt = "blugold logo"></img>
              </Link>
              {/* <a href="/tutorials" className="navbar-brand">
                <img src = {logo} alt = "blugold logo"></img>
               </a> */}
            </div>
            <div id = "spacer"></div>
            <div className="navBarLinks">
                <Link id = "navLinks" to={"/tutorials"} className="nav-link">
                  Items
                </Link>
            </div>
            <div className="spacer2"></div>
            <div className = "navBarLinks">
                <Link id = "navLinks" to={"/add"} className="nav-link">
                  Add Item
                </Link>
            </div>
            <div className="spacer2">
            </div>
          </nav>
        <div className="itemBody">
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
              <Route exact path="/add" component={AddTutorial} />
              <Route path="/tutorials/:id" component={Tutorial} />
            </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;