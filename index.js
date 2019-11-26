import React, { Component } from "react";
import { render } from "react-dom"; 
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Wrapper, Login } from "./components/main";
import { PrivateRoute } from './helpers/PrivateRoute'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/app.scss";  

class App extends Component { 

  constructor() {
    super();
    this.state = {
      name: "React"
    }; 

  }

  render() {
    let history = this.state.history;
    return ( 
        <Switch> 
          <PrivateRoute exact path="/">
            <Wrapper />
          </PrivateRoute>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Redirect from="*" to="/" />
        </Switch> 
    );
  }
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
