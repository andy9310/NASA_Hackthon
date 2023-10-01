import React, { useState } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import Header from "./Header";
import Main from "./pages/Main";
import Play from "./pages/Play";
import Result from "./pages/Result";

function App() {
  return (
    <div className="App">
      {/* <Header> I think can add a header will be great*/} 
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/play" component={Play} />
          <Route path="/result" component={Result} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
