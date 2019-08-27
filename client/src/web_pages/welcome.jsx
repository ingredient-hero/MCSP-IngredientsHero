import React from 'react';
import axios from 'axios';
import Logo from './logo.jsx';
import SignUp from './Welcome_Components/signup.jsx';
import LoginModal from './Welcome_Components/login.jsx';
export default class Welcome extends React.Component {
    constructor(props) {
      super(props);

    }

        render(){

    
        return(
           
                <div id='Homepage'>
                    <div className='HomepageButtons'>

                <button className='SignUpButton' disabled={false} type="button" onClick={this.props.onClickSignUp}>
                     Sign-Up
                </button>
                <button className='LoginButton' onClick={this.props.toggleModal}>
                    Login
                </button>
                    </div>
                {/* <img className='backgroundImage' ></img> */}
                <SignUp onSignUpSubmitClick={this.props.onSignUpSubmitClick} hasClickedSignUp={this.props.hasClickedSignUp} 
                onClickLogin={this.props.onClickLogin} onClickSignUp={this.props.onClickSignUp} onChangeLogin={this.props.onChangeLogin}
                name={this.props.name} username={this.props.userName} password={this.props.password} email={this.props.email} 
                SignUp={this.props.SignUp} Login={this.props.Login} 
                />
                
                <LoginModal userName={this.props.userName} password={this.props.password} onChangeLogin={this.props.onChangeLogin}
                toggleModal={this.props.toggleModal} isOpen={this.props.isOpen} onLoginSubmitClick={this.props.onLoginSubmitClick}/>
                
                {/* <h1 className='Title' >Welcome to Ingredient Hero!</h1> */}
                <Logo/>
                <h1 className='yolo1' > Even Food Needs Saving</h1>
                <h1 className='yolo2'>How to Use</h1>

                <p className='p1'> With the use of this app you will no longer have to worry about your perishable goods going to waste. We will help you to make the most of the items in your pantry, and offer you with simple recipes including the items available in your pantry! </p>
                <p className='p2'> To use this app start by either logging in or sign-up for a new account. Once you have signed in you will then be able to add items to your pantry. Based on these items that you add we will then supply you with a list of recipes that contains items closer to expiring.</p>
                    
                
            </div>
        );
    }
}