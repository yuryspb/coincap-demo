import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import MainTable from "./MainTable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainTable />
      </div>
    );
  }
}

export default App;
