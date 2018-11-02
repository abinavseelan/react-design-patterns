import React from "react";

const FormContext = React.createContext();

class Form extends React.Component {
  state = {
    form: {}
  };

  static Input = ({ children, name }) => {
    return (
      <FormContext.Consumer>
        {contextValue => (
          <label>
            {children}
            <input
              value={contextValue.form[name] || ''}
              type="text"
              name={name}
              onChange={contextValue.onChange}
            />
          </label>
        )}
      </FormContext.Consumer>
    );
  };

  static Submit = ({ children }) => {
    return <input type="submit" value={children} />;
  };

  onChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      form: {
        ...prevState.form,
        [name]: value
      }
    }));
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.form);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <FormContext.Provider
          value={{
            form: this.state.form,
            onChange: this.onChange
          }}
        >
          {this.props.children}
        </FormContext.Provider>
      </form>
    );
  }
}

export default Form;
