import React from "react";

const FormContext = React.createContext();

class Form extends React.Component {
  state = {
    form: {}
  };

  static Input = ({ children, value, name }) => {
    return (
        <label>
        {children}
        <input
            value={value}
            type="text"
            name={name}
            onChange={onChange}
        />
        </label>
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
      {
          React.Children.map(this.props.children, childElement => {
              return React.cloneElement(childElement, {
                  value: this.state.form[childElement.props.name],
                  onChange: this.onChange
              });
          })
      }
      </form>
    );
  }
}

export default Form;
