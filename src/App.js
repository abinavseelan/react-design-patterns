import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Final from './Final';
import Demo from './Demo';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path='/compound-components' component={Final.CompoundComponent}/>
            <Route exact path='/compound-components/demo' component={Demo.CompoundComponent}/>

            <Route exact path='/compound-components' component={Final.CompoundComponent}/>
            <Route exact path='/compound-components/demo' component={Demo.CompoundComponent}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
