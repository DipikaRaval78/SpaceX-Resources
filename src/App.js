import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Launchpads from './components/Launchpads';
import Missions from './components/Missions';
import Payloads from './components/Payloads';
import LandingPage from './components/LandingPage';
import PayloadDetails from './components/PayloadDetails';
import { NoMatch } from './components/NoMatch';

class App extends Component {

  render() {
    return (
      <div className="App">
          <BrowserRouter> 
            <Header />
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/launchpads" component={Launchpads} />
                <Route exact path="/missions" component={Missions} />
                <Route exact path="/payloads" component={Payloads} />
                <Route path="/payload/:id" component={PayloadDetails} />
                <Route component={NoMatch} />
              </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
