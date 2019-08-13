import React from 'react';
import Welcome from './web_pages/welcome.jsx';
import Pantry from './web_pages/pantry.jsx';
import axios from 'axios';
import './App.css';

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
          <h1 style={{fontSize:'60px', color:'blue', position: 'absolute', left: '25%', top: '35%'}}> Welcome to Ingredient Hero!</h1>
          <p style={{position: 'absolute', right: '22%', left: '26%', top: '55%'}}> With the use of this app you will no longer have to worry about your perishable goods going to waste. We will help you to make the most of the items in your pantry, and offer you with simple recipes including the items available in your pantry! </p>
          <h2 style={{fontSize:'60px', color:'blue', position:'absolute', left:'25%', top:'60%'}}>How to Use</h2>
          <p style={{position: 'absolute', right: '22%', left: '26%', top: '80%'}}> To use this app start by either logging in or sign-up for a new account. Once you have signed in you will then be able to add items to your pantry. Based on these items that you add we will then supply you with a list of recipes that contains items closer to expiring.</p>
        </>
      );
    }
  }