import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Final from './Final';
import Demo from './Demo';
import ToC from './ToC';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <React.Fragment>
              <Route exact path='/' component={ToC} />

              <Route exact path='/compound-components' component={Final.CompoundComponent}/>
              <Route exact path='/compound-components/demo' component={Demo.CompoundComponent}/>

              <Route exact path='/flexible-compound-components' component={Final.FlexibleCC}/>
              <Route exact path='/flexible-compound-components/demo' component={Demo.FlexibleCC}/>

              <Route exact path='/render-props' component={Final.RenderProps}/>
              <Route exact path='/render-props/demo' component={Demo.RenderProps}/>

              <Route exact path='/prop-collections' component={Final.PropCollections}/>
              <Route exact path='/prop-collections/demo' component={Demo.PropCollections}/>

              <Route exact path='/prop-getters' component={Final.PropGetters}/>
              <Route exact path='/prop-getters/demo' component={Demo.PropGetters}/>
            </React.Fragment>
          </Switch>
        </Router>
        
        
      </React.Fragment>
    );
  }
}

export default App;
