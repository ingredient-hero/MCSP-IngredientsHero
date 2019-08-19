import React from 'react';
import Welcome from './web_pages/welcome.jsx';
import Pantry from './web_pages/pantry.jsx';
import axios from 'axios';
import $ from 'jquery'
import bootbox from 'bootbox';
import bootstrap from 'bootstrap'
import LoginModal from './web_pages/welcome_components/login.jsx'
//import './App.css';


// This is an example that will need to be rebuilt and/or refactored.
// This page is pulling in both the pantry and the welcome class components to conditionally render on the page.
// You may need to import more libraries or files, depending on what's required.

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        SignUp: '',
        Login: '',
        
      };
        this.onClickSignUp = this.onClickSignUp.bind(this);
        this.onClickLogin = this.onClickLogin.bind(this);
    }


    onClickSignUp(e){
      bootbox.confirm("<form id='infos' action=''>\
      Name:<input type='text' name='user_name' /><br/>\
      Username:<input type='text' name='user_name' /><br/>\
      Password:<input type='text' name='user_name' /><br/>\
      Email:<input type='text' name='user_name' />\
      </form>", function(result) {if(result)$('#infos').submit();
    })
    console.log(e)
     e.target.disabled = true;
    
  }


  onClickLogin(event){
    bootbox.confirm("<form id='infos' action=''>\
    Username:<input type='text' name='user_name' /><br/>\
    Password:<input type='text' password='password' />\
    </form>",function(result) {if(result)$('#infos').submit();
  })
  event.target.disabled = true;
   };

  
  
    render() {
      return (
        <>
           <LoginModal/>
          <Welcome onClickLogin={this.onClickLogin} onClickSignUp={this.onClickSignUp} SignUp={this.state.SignUp} Login={this.state.Login} />
          <Pantry />
        </>
      );
    }
  }

  