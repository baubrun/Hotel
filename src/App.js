import React from "react";
import "./App.css";
import HomePage from "./Views/HomePage";
import NotFound from "./Views/NotFound";
import Rooms from "./Views/Rooms";
import SingleRoom from "./Views/SingleRoom";
import Navbar from "./components/Navbar"
import { BrowserRouter, Switch, Route } from "react-router-dom";



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
