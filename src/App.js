import React, { Component } from "react";
import "./App.css";

import MainTable from "./MainTable";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainTable />
      </div>
    );
  }
}

export default App;
