import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <NavBar/>
      <div className="container">
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/saved" component={Saved} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
