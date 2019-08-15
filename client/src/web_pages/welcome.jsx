import React from 'react';
import Logo from './logo.jsx';
import LoginModal from './welcome_components/login.jsx';
import bootbox from 'bootbox';
import bootstrap from 'bootstrap';
import $ from 'jquery';

export default class Welcome extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            SignUp: '',
            Login: '',
            isOpen: false,

        }

    
    
        this.onClickSignUp = this.onClickSignUp.bind();
        this.onClickLogin = this.onClickLogin.bind(this);

    }

    onClickSignUp(){
        console.log('clicked sign up button')
        alert('did you create a Modal for signing up?')
    }
    onClickLogin(event){
         bootbox.confirm("<form id='infos' action=''>\
                         Username:<input type='text' name='user_name' /><br/>\
                         Password:<input type='text' password='password' />\
                         buttons:<confirm: submit:'submit', className:'btn-success' />\
                         </form>",function(result) {
                        if(result)
                         $('#infos').submit();
   });
            // event.target.disabled = true
    }


    render () {
        return(
            <div >
            <button className='Sign-Up' style={{marginLeft: "1300px"}} onClick={this.onClickSignUp} type="submit">Sign-Up</button>
            
            <button className='Login' disabled={false} onClick={this.onClickLogin} type="submit">Login</button>


                <Logo/>
                <h1 style={{fontSize:'60px', color:'blue', position: 'absolute', left: '25%', top: '35%'}}> Welcome to Ingredient Hero!</h1>
                <p style={{position: 'absolute', right: '22%', left: '26%', top: '55%'}}> With the use of this app you will no longer have to worry about your perishable goods going to waste. We will help you to make the most of the items in your pantry, and offer you with simple recipes including the items available in your pantry! </p>
                <h2 style={{fontSize:'60px', color:'blue', position:'absolute', left:'25%', top:'60%'}}>How to Use</h2>
                <p style={{position: 'absolute', right: '22%', left: '26%', top: '80%'}}> To use this app start by either logging in or sign-up for a new account. Once you have signed in you will then be able to add items to your pantry. Based on these items that you add we will then supply you with a list of recipes that contains items closer to expiring.</p>
            </div>


            
        )
    }
}

