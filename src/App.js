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
      <div className="container">
        <Router>
          <Switch>
            <React.Fragment>
              <Route exact path='/' component={ToC} />

              <Route exact path='/hoc' component={Patterns.HoC}/>

              <Route exact path='/provider' component={Patterns.Provider}/>

              <Route exact path='/provider-with-hoc' component={Patterns.ProviderWithHoc}/>

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
      </div>
    );
  }
}

export default App;
