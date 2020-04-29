import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Apply from "./components/Apply";
import About from "./components/About";
import Contact from "./components/Contact";
import Donate from "./components/Donate";

export default (
  <Switch>
    <Route path="/Apply" component={Apply} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Donate" component={Donate} />
    <Route exact path="/" component={Home} />
  </Switch>
);
