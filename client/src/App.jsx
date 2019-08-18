import React from 'react';
import LoginForm from './web_pages/welcome.jsx';
import Pantry from './web_pages/pantry.jsx';
//import axios from 'axios';
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
        // name: '',
        // userName: '',
        // password: '',
        // email: '',
        // SignUp: '',
        // Login: '',

        user: null
      };
        // this.onChangeSignUp = this.onChangeSignUp.bind(this);
        // this.onClickSignUp = this.onClickSignUp.bind(this);
        // this.onClickLogin = this.onClickLogin.bind(this);
    }

    signIn(username, password) {
      // This is where you would call Firebase, an API etc...
      // calling setState will re-render the entire app (efficiently!)
      this.setState({
        user: {
          username,
          password,
        }
      })
    }
    
    signOut() {
      // clear out user from state
      this.setState({user: null})
    }
    // onClickSignUp(e){
    //   bootbox.confirm(`<form id='infos' action=''>\
    //   Sign-Up <br/>\
    //   Name:<input onChange={this.onChangeSignUp} class='name' type='text' name='name' >\
    //   Username:<input onChange={this.onChangeSignUp} class='userName' type='text' name='userName' /><br/>\
    //   Password:<input onChange={this.onChangeSignUp} class='password' type='text' name='password' />\
    //   Email:<input onChange={this.onChangeSignUp} class='email' type='text' name='email' />\
    //   </form> `, function(result) {if(result)$('#infos').submit();
    // })
  
    //e.target.disabled = true;
    
  }

  // onChangeSignUp(e){
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })

  // }

  // onClickLogin(){
  //   console.log('clicked login in button')
  //  };

  
  
  render() {
    return (
      <>

      { 
        (this.state.user) ? 
          <Welcome 
           user={this.state.user} 
           onSignOut={this.signOut.bind(this)} 
          />
        :
          <LoginForm 
           onSignIn={this.signIn.bind(this)} 
          />
      }
         
        //{/* <Welcome onClickLogin={this.onClickLogin} onClickSignUp={this.onClickSignUp} SignUp={this.state.SignUp} Login={this.state.Login} /> */}
        <Pantry />
      </>
    )
  }
  
  

          