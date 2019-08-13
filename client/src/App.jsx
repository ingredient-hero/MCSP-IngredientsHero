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
     
      };
    
    }
  
  
    render() {
      return (
        <>
          <Welcome/>
        </>
      );
    }
  }