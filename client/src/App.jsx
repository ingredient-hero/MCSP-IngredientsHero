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
        name: '',
        userName: '',
        password: '',
        email: '',
        SignUp: '',
        Login: '',
        item_name: '',
        expiration: '',
        hasClickedSignUp: false,
        userGrantedAccess: false,
        isOpen: false,
      };
        this.onChangeLogin = this.onChangeLogin.bind(this)
        this.onChangeAddItem = this.onChangeAddItem.bind(this);
        this.onClickSignUp = this.onClickSignUp.bind(this);
        this.grantUserAccess= this.grantUserAccess.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.onClickCancel = this.onClickCancel.bind(this);
    }


    onClickSignUp(e){
      
    this.setState({
      hasClickedSignUp: true
    })
  }

  onClickCancel(e){
    this.setState({
      hasClickedSignUp: false
    })
  }

  onChangeLogin(event){
    // event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value,
    })
  }


  onChangeAddItem (event) {
    this.setState ({
        [event.target.name]: event.target.value
    })
  }

  grantUserAccess (event) {
    this.setState({userGrantedAccess: true});
  } 
 
  toggleModal () {
    this.setState({isOpen: !this.state.isOpen});
  }

   render() {
      if (this.state.userGrantedAccess === false) {
        return (
          <Welcome onClickCancel={this.onClickCancel} hasClickedSignUp={this.state.hasClickedSignUp} user={this.state.userName} 
          password={this.state.password} change={this.onChangeSignUp} 
          onClickLogin={this.onClickLogin} onClickSignUp={this.onClickSignUp} name={this.state.name} 
          username={this.state.userName} password={this.state.password} email={this.state.email} 
          SignUp={this.state.SignUp} Login={this.state.Login} onChangeLogin={this.onChangeLogin} 
          grantUserAccess={this.grantUserAccess} isOpen={this.state.isOpen} toggleModal={this.toggleModal}/>
        )
      } else {
        return ( 
            <Pantry expiration={this.state.expiration} onChangeAddItem={this.onChangeAddItem} 
            item_name={this.state.item_name} expiration={this.state.expiration} isOpen={this.state.isOpen}
            toggleModal={this.toggleModal}/>
        );
      }
    }
  }