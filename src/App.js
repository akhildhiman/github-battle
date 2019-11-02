import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "./components/Home/Home"
import Battle from "./components/Battle/Battle"

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Route path="/Battle" component={Battle} />


      </>
    </Router>

  )
}

export default App;
