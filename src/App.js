import React, { Component } from "react";
import Contacts from "./component/Contacts";
import Header from "./component/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contacts" />
        <Contacts />
      </div>
    );
  }
}

export default App;
