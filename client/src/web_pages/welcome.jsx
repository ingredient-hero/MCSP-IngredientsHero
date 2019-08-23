import React from 'react';
import axios from 'axios';
import Logo from './logo.jsx';
import SignUp from './Welcome_Components/signup.jsx';
import LoginModal from './Welcome_Components/login.jsx';
export default class Welcome extends React.Component {
    constructor(props) {
      super(props);

    }
    onSignUpSubmitClick(e){
        // e.preventDefault();
        // this.props.grantUserAccess;
        // axios.post('/mysignup',{
        //     name: this.props.name,
        //     userName: this.props.userName,
        //     password: this.props.password,
        //     email: this.props.email
        // })
        // .then((res)=>{
        // }
        // )
    }


    onLoginSubmitClick(e){
        e.preventDefault();
        axios.get('/mylogin')
        .then(res => {
            // res.data.map(funciton (users){

            // })
        })
        .catch((err) => { console.log(err); });
    }

        render(){

    
        return(
           
                <div id='Homepage'>
                    <div className='pizza'></div>
                <button style={{marginLeft: '1300px'}} disabled={false} type="button" onClick={this.props.onClickSignUp}>
                     Sign-Up
                </button>
                {/* <img className='backgroundImage' ></img> */}
                <SignUp onSignupSubmitClick={this.onSignUpSubmitClick} hasClickedSignUp={this.props.hasClickedSignUp} 
                change={this.props.onChangeLogin} onClickLogin={this.props.onClickLogin} onClickSignUp={this.props.onClickSignUp} 
                name={this.props.name} username={this.props.userName} password={this.props.password} email={this.props.email} 
                SignUp={this.props.SignUp} Login={this.props.Login} grantUserAccess={this.props.grantUserAccess}/>
                
                <LoginModal userName={this.props.userName} password={this.props.password} onChangeLogin={this.props.onChangeLogin}
                grantUserAccess={this.props.grantUserAccess} toggleModal={this.props.toggleModal} isOpen={this.props.isOpen}/>
                
                <Logo/>

                <h1 className='yolo1' > Welcome to Ingredient Hero!</h1>
                <p className='p1'> With the use of this app you will no longer have to worry about your perishable goods going to waste. We will help you to make the most of the items in your pantry, and offer you with simple recipes including the items available in your pantry! </p>
                <h2 className='yolo2'>How to Use</h2>
                <p className='p2'> To use this app start by either logging in or sign-up for a new account. Once you have signed in you will then be able to add items to your pantry. Based on these items that you add we will then supply you with a list of recipes that contains items closer to expiring.</p>
                    
                
            </div>
        );
    }
}
