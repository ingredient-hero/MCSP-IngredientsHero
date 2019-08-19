import React from 'react';
import Welcome from './web_pages/welcome.jsx';
import Pantry from './web_pages/pantry.jsx';
import axios from 'axios';
import $ from 'jquery'
import bootbox from 'bootbox';
import bootstrap from 'bootstrap'
// import './App.css';

// This is an example that will need to be rebuilt and/or refactored.
// This page is pulling in both the pantry and the welcome class components to conditionally render on the page.
// You may need to import more libraries or files, depending on what's required.

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        userName: '',
        password: '',
        email: '',
        SignUp: '',
        Login: '',
        item_name: '',
        expiration: '',
        hasClickedSignUp: false
      };
        this.onChangeSignUp = this.onChangeSignUp.bind(this);
        this.onClickSignUp = this.onClickSignUp.bind(this);
        this.onClickLogin = this.onClickLogin.bind(this);
        this.onChangeAddItem = this.onChangeAddItem.bind(this);
    }


    onClickSignUp(e){
      
    this.setState({
      hasClickedSignUp: true
    })
    e.target.disabled = true;
  }

  onChangeSignUp(e){
    this.setState({
      [e.target.name]: e.target.value
    })

  }


  onChangeAddItem (event) {
    this.setState ({
        [event.target.name]: event.target.value
    })
  }

  onClickLogin(){
    console.log('clicked login in button')
   };

  
  
    render() {
      return (
        <div>

          <Welcome hasClickedSignUp={this.state.hasClickedSignUp} change={this.onChangeSignUp} onClickLogin={this.onClickLogin} onClickSignUp={this.onClickSignUp} name={this.state.name} username={this.state.userName} password={this.state.password} email={this.state.email} SignUp={this.state.SignUp} Login={this.state.Login} />
          <Pantry onAddToPantry={this.onAddToPantry} expiration={this.state.expiration} item_name={this.state.item_name} 
          onChangeAddItem={this.onChangeAddItem} item_name={this.state.item_name} expiration={this.state.expiration}/>
        </div>
      );
    }
  }