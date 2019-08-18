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
        name: '',
        userName: '',
        password: '',
        email: '',
        SignUp: '',
        Login: '',
        item_name: '',
        expiration: '',
        addItemsClicks: 0, 
      };
        this.onChangeSighUp = this.onChangeSignUp.bind(this);
        this.onClickSignUp = this.onClickSignUp.bind(this);
        this.onClickLogin = this.onClickLogin.bind(this);
        this.onAddToPantry = this.onAddToPantry.bind(this);
        this.onChangeAddItem = this.onChangeAddItem.bind(this);
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
    
  

  // onChangeSignUp(e){
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })

  // }


  onAddToPantry () {
    if (this.state.addItemsClicks === 0) {
        this.setState({
            addItemsClicks: 1
        })
        bootbox.confirm("<form id='infos' action=''>\
                Item Name:<input type='text' onChange='this.onChangeAddItem' class='item_name' name='item_name' /><br/>\
                Expiration Date:<input type='text' onChange='this.onChangeAddItem' class='expiration' name='expiration' />\
                </form>", function(result) {if(result)$('#infos').submit(function (event) {
                });
            });
    }
    if (this.state.addItemsClicks > 0) {
        this.setState({
            addItemsClicks: 0
        })
    }
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
      <>

          <Welcome change={this.onChangeSignUp} onClickLogin={this.onClickLogin} onClickSignUp={this.onClickSignUp} name={this.state.name} username={this.state.userName} password={this.state.password} email={this.state.email} SignUp={this.state.SignUp} Login={this.state.Login} />
          {/* <Welcome onClickLogin={this.onClickLogin} onClickSignUp={this.onClickSignUp} SignUp={this.state.SignUp} Login={this.state.Login} /> */}
          <Pantry onAddToPantry={this.onAddToPantry} expiration={this.state.expiration} item_name={this.state.item_name}/>
        </>
      )
    }
  };
