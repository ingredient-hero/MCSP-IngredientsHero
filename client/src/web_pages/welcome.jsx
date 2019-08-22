import React from 'react';
import axios from 'axios';
import Logo from './logo.jsx';
import SignUp from './Welcome_Components/signup.jsx';
import LoginModal from './Welcome_Components/login.jsx';
import About from './Welcome_Components/about.jsx';
import HowTo from './Welcome_Components/howTo.jsx';

export default class Welcome extends React.Component {
    constructor(props) {
      super(props);

    }
    onSignUpSubmitClick(e){
        e.preventDefault();
        this.props.grantUserAccess();
        axios.post('/mysignup',{
            name: this.props.name,
            userName: this.props.userName,
            password: this.props.password,
            email: this.props.email
        })
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
           
                <div>
                <button style={{marginLeft: '1300px'}} disabled={false} type="button" onClick={this.props.onClickSignUp}>
                     Sign-Up
                </button>
                <SignUp onSignupSubmitClick={this.props.onSignUpSubmitClick} hasClickedSignUp={this.props.hasClickedSignUp} 
                change={this.props.onChangeLogin} onClickLogin={this.props.onClickLogin} onClickSignUp={this.props.onClickSignUp} 
                name={this.props.name} username={this.props.userName} password={this.props.password} email={this.props.email} 
                SignUp={this.props.SignUp} Login={this.props.Login} grantUserAccess={this.props.grantUserAccess}/>
                
                <LoginModal userName={this.props.userName} password={this.props.password} onChangeLogin={this.props.onChangeLogin}
                grantUserAccess={this.props.grantUserAccess}/>
                
                <Logo/>
                <h1> Welcome to Ingredient Hero!</h1>
                <div>
                    <h2>About Ingredient Hero</h2>
                    <About />
                </div>
                <h3>How to Use</h3>
                <div>
                    <HowTo />
                </div>
            </div>
        );
    }
}