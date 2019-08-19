import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import bootbox from 'bootbox';
import bootstrap from 'bootstrap';
import Logo from './logo.jsx';
import SignUp from './Welcome_Components/signUp.jsx';


export default class Welcome extends React.Component {
    constructor(props) {
      super(props);

    }
    onSignUpSubmitClick(e){
        axios.post('/mysignup',{
            name: this.props.name,
            userName: this.props.userName,
            password: this.props.password,
            email: this.props.email
        })
    }
        render(){

            return(
                <div>
                <button style={{marginLeft: '1300px'}} disabled={false} type="button" onClick={this.props.onClickSignUp}>
                     Sign-Up
                </button>
                <button disabled={false} className='Login' onClick={this.props.onClickLogin} type="submit">Login</button>
                <SignUp onSignupSubmitClick={this.props.onSignUpSubmitClick} hasClickedSignUp={this.props.hasClickedSignUp} change={this.props.change} onClickLogin={this.props.onClickLogin} onClickSignUp={this.props.onClickSignUp} name={this.props.name} username={this.props.userName} password={this.props.password} email={this.props.email} SignUp={this.props.SignUp} Login={this.props.Login}/>
                <Logo/>
                <h1 className='yolo' style={{fontSize:'60px', color:'blue', position: 'absolute', left: '25%', top: '35%'}}> Welcome to Ingredient Hero!</h1>
                <p style={{position: 'absolute', right: '22%', left: '26%', top: '55%'}}> With the use of this app you will no longer have to worry about your perishable goods going to waste. We will help you to make the most of the items in your pantry, and offer you with simple recipes including the items available in your pantry! </p>
                <h2 style={{fontSize:'60px', color:'blue', position:'absolute', left:'25%', top:'60%'}}>How to Use</h2>
                <p style={{position: 'absolute', right: '22%', left: '26%', top: '80%'}}> To use this app start by either logging in or sign-up for a new account. Once you have signed in you will then be able to add items to your pantry. Based on these items that you add we will then supply you with a list of recipes that contains items closer to expiring.</p>
            </div>
        );
    }
}