import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Patterns from './Patterns';
import ToC from './ToC';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <React.Fragment>
              <Route exact path='/' component={ToC} />

              <Route exact path='/hoc' component={Patterns.HoC}/>

              <Route exact path='/compound-components' component={Patterns.CompoundComponent}/>

              <Route exact path='/flexible-compound-components' component={Patterns.FlexibleCC}/>

              <Route exact path='/render-props' component={Patterns.RenderProps}/>

              <Route exact path='/prop-collections' component={Patterns.PropCollections}/>

              <Route exact path='/prop-getters' component={Patterns.PropGetters}/>

              <Route exact path='/state-initializers' component={Patterns.StateInitializers}/>

              <Route exact path='/state-reducers' component={Patterns.StateReducers}/>
            </React.Fragment>
          </Switch>
        </Router>
        
        
      </React.Fragment>
    );
  }
}

export default App;
