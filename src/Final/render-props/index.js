import React from "react";

import LocalStorage from "./LocalStorage";

function App() {
  return <LocalStorage>{(load, save) => <p>Name: {load("name")}</p>}</LocalStorage>;
}

export default App;