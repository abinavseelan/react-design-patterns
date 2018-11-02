import React from "react";

import LocalStorage from "./LocalStorage";

function App() {
  return <LocalStorage>{(load, save) => <p>{load("foo")}</p>}</LocalStorage>;
}

export default App;