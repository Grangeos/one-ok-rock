import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Header from "./js/components/Header.jsx";
import HomePage from "./js/components/HomePage.jsx";

class App extends Component {
  render() {
    return (
        <div id="app">
            <Header />
            <Route render={() => {
              window.scrollTo(0, 0);
              return null;
            }} />

            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
        </div>

    );
  }
}

export default App;
