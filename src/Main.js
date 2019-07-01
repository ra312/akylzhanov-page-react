import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Research from "./Research";
import Contact from "./Contact";
import About from "./About";
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Dr. Rauan Akylzhanov </h1> 
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/research">Research</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/research" component={Research}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default Main;
