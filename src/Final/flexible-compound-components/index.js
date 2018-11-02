import React from "react";

import Form from "./Form";

class App extends React.Component {
  state = {
    result: {}
  };

  onSubmit = data => {
    this.setState({
      result: data
    });
  };

  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.onSubmit}>
          <h1>Contact Details</h1>

          <div>
            <Form.Input name="name">Name</Form.Input>
          </div>
          <div>
            <Form.Input name="phone">Phone Number</Form.Input>
          </div>
          <Form.Submit>Submit Form</Form.Submit>
        </Form>

        <pre>{JSON.stringify(this.state.result, null, 2)}</pre>
      </React.Fragment>
    );
  }
}

export default App;