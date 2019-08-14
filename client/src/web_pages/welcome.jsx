import React from 'react';
import Logo from './logo.jsx';


export default class Welcome extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            SignUp: '',
            Login: '',

        }

    
    
        this.onClickSignUp = this.onClickSignUp.bind();
        this.onClickLogin = this.onClickLogin.bind();

    }

    onClickSignUp(){
        console.log('clicked sign up button')
        alert('did you create a Modal for signing up?')
    }
    onClickLogin(){
        console.log('clicked login in button')
        alert('did you create a Modal for logging in?')
    }


    render () {
        return(
            <div >
  
            <button className='Sign-Up' style={{marginLeft: "1300px"}} onClick={this.onClickSignUp} type="submit">Sign-Up</button>
            
            <button className='Login' onClick={this.onClickLogin} type="submit">Login</button>


                <Logo/>
                <h1 style={{fontSize:'60px', color:'blue', position: 'absolute', left: '25%', top: '35%'}}> Welcome to Ingredient Hero!</h1>
                <p style={{position: 'absolute', right: '22%', left: '26%', top: '55%'}}> With the use of this app you will no longer have to worry about your perishable goods going to waste. We will help you to make the most of the items in your pantry, and offer you with simple recipes including the items available in your pantry! </p>
                <h2 style={{fontSize:'60px', color:'blue', position:'absolute', left:'25%', top:'60%'}}>How to Use</h2>
                <p style={{position: 'absolute', right: '22%', left: '26%', top: '80%'}}> To use this app start by either logging in or sign-up for a new account. Once you have signed in you will then be able to add items to your pantry. Based on these items that you add we will then supply you with a list of recipes that contains items closer to expiring.</p>
            </div>


            
        )
    }
}

