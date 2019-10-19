import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Details from "./pages/Details";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
    <NavBar/>
      <Switch>
        <Route path="/search/:id" component={Details} />
        <Route path="/search" component={Search} />
        <Route path="/saved" component={Saved} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
