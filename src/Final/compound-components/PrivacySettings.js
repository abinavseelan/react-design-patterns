import React from "react";

class PrivacySetting extends React.Component {
  state = {
    checked: false
  };

  static Checkbox = ({ toggle, children }) => {
    return (
      <label>
        <input type="checkbox" onChange={toggle} />
        {children}
      </label>
    );
  };

  static Message = ({ checked, children }) => {
    console.log(checked);
    return checked ? <p>{children}</p> : null;
  };

  toggle = () => {
    this.setState(prevState => ({
      checked: !prevState.checked
    }));
  };

  render() {
    return React.Children.map(this.props.children, childElement => {
      return React.cloneElement(childElement, {
        checked: this.state.checked,
        toggle: this.toggle
      });
    });
  }
}

export default PrivacySetting;
