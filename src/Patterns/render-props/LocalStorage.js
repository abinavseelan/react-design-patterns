import React from "react";

class Storage extends React.Component {
  load = key => {
    return localStorage.getItem(key);
  };

  save = (key, data) => {
    localStorage.setItem(key, data);
  };

  render() {
    return this.props.children(this.load, this.save);
  }
}

export default Storage;
