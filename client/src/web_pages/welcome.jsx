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
                <div className='HomepageButtons'>

                    <button className='SignUpButton' disabled={false} type="button" onClick={this.props.onClickSignUp}>
                        Sign-Up
                    </button>
                    <button className='SignUpButton' onClick={this.props.toggleModal}>
                        Login
                    </button>
                </div>

                <SignUp onSignupSubmitClick={this.onSignUpSubmitClick} hasClickedSignUp={this.props.hasClickedSignUp} 
                onClickLogin={this.props.onClickLogin} onClickSignUp={this.props.onClickSignUp} 
                name={this.props.name} username={this.props.userName} password={this.props.password} email={this.props.email} 
                SignUp={this.props.SignUp} Login={this.props.Login} grantUserAccess={this.props.grantUserAccess}
                />
                    
                <LoginModal userName={this.props.userName} password={this.props.password} onChangeLogin={this.props.onChangeLogin}
                grantUserAccess={this.props.grantUserAccess} toggleModal={this.props.toggleModal} isOpen={this.props.isOpen}/>

                <div className="wrapper">
                    <div className="fixed-bg bg-1">
                        <div className="introline">
                            <h1> Become the Hero Your Food Deserves </h1>
                        </div>
                    </div>
                    <div className="scroll-bg">
                        <div className="scrollInfo">
                            <h2> Our Mission</h2>
                            <p> To help you save money and reduce waste from your perishable items.</p>
                            <p> If you are looking for food, I can tell you we don't have any. But what we do have are a very particular set of skills, skills gained by changing stuff and seeing what happens. Skills that make us a nightmare for people who waste food. Fear no more as Ingredient Hero is here to help!</p>
                        </div>
                    </div>
                    <div className="fixed-bg bg-2">
                        <h1></h1>
                    </div>
                    <div className="scroll-bg">
                        <div className="scrollInfo">
                            <p> How to Join: 1. Click on the Signup Button. 2. Fill out the information. 3. Enjoy the site.  </p>
                            <p> Already a user? Just Login and enjoy the fruits of our labor. </p>
                        </div>
                    </div>
                    <div className="fixed-bg bg-3">
                        <h1></h1>
                    </div>
                    <div className="scroll-bg">
                        <div className="scrollInfo"> 
                            <p> How to Add an Item: 1. Once logged in locate the Add to Pantry button. 2. Click it and add your perishable item.</p>
                            <p> How to Remove an Item: 1. Once an item is added and populating in your Perishable Items column click the Remove button. </p>
                        </div>
                    </div>
                    <div className="fixed-bg bg-4">
                        <div className="oneliner">
                            <div className="onelinerPt1">
                                <h1> Even Food Needs Saving </h1>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}