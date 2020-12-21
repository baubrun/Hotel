import React, { useEffect } from "react";
import { useDispatch} from "react-redux";

import "./App.css";
import HomePage from "./Views/HomePage";
import NotFound from "./Views/NotFound";
import Rooms from "./Views/Rooms";
import SingleRoom from "./Views/SingleRoom";
import Navbar from "./components/Navbar"
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {getRooms} from "./redux/roomSlice"


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRooms())
  }, [])

  


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
