import React from 'react';
import Welcome from './web_pages/welcome.jsx';
import Pantry from './web_pages/pantry.jsx';
import axios from 'axios';
// import './App.css';

// This is an example that will need to be rebuilt and/or refactored.
// This page is pulling in both the pantry and the welcome class components to conditionally render on the page.
// You may need to import more libraries or files, depending on what's required.

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        seaCreatures: []
      };
      this.api = `http://localhost:8000/api/example`;
    }
    componentDidMount() {
      fetch(this.api)
        .then(res => res.json())
        .then(seaCreatures => {
          this.setState({ seaCreatures: seaCreatures.data });
        });
    }
  
    render() {
      return (
        <>
          <h1>Welcome to Ingredient Hero!</h1>
          <ul>
            {this.state.seaCreatures.map((creature, index) => (
              <li key={index}>{creature}</li>
            ))}
          </ul>
        </>
      );
    }
  }