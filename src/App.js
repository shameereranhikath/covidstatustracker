import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js'
// import 'jquery';
// import 'popper.js';
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import India from './Components/Country/India/India';
import UAE from './Components/Country/UAE/UAE';
import World from './Components/World/World';


export default class App extends Component {
  render() {
    return (
      <div className="App">
         {/* <India/> */}
        {/* <Navbar /> */}
        <Router>
          <Navbar/>
          <Route exact path="/" component={India}/>
          <Route exact path="/india" component={India}/>
          <Route exact path="/uae" component={UAE}/>
          <Route exact path="/world" component={World}/>


        </Router>
      </div>
    )
  }
}
