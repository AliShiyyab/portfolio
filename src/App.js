import React, { Component } from 'react'
import HomePage from './component/HomePage'
import Welcome from './component/Welcome'
import AboutMe from './component/AboutMe';
import Contact from './component/Education';
import Project from './component/Project';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <Router>
          <Switch>
            <Route path="/Home">
              <HomePage />
            </Route>
          </Switch>
          <Switch>
            <Route path="/AboutUs">
              <AboutMe />
            </Route>
          </Switch>
          <Switch>
            <Route path="/Contact">
              <Contact />
            </Route>
          </Switch>
          <Switch>
            <Route path="/Projects">
              <Project />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
