import React from "react";
import "./App.css";

import HomePage from "./components/Pages/HomePage";
import NotFound from "./components/Pages/NotFound";
import Rooms from "./components/Pages/Rooms";
import SingleRoom from "./components/Pages/SingleRoom";
import Navbar from "./components/Navbar"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";



const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
