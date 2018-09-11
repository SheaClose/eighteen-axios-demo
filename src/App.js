import React, { Component } from "react";

import axios from "axios";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people").then(res => {
      this.setState({ people: res.data.results });
    });
  }

  render() {
    let people = this.state.people.map((person, ind) => {
      return <h3 key={ind}> {person.name} </h3>;
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Swapi!!</h1>
        </header>
        <div>{people}</div>
      </div>
    );
  }
}

export default App;
