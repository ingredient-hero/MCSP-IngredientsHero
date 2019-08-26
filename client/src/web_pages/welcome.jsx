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
                    <button className='LoginButton' onClick={this.props.toggleModal}>
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
                        <h1>Fixed Background scrolling</h1>
                    </div>
                    <div className="scroll-bg">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor tempor, posuere mi id, eleifend magna. Nulla at lectus magna. Etiam sodales arcu at lectus porttitor accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur id urna dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin et pharetra justo, quis suscipit risus. Maecenas tincidunt efficitur ex in pharetra.</h3>
                    </div>
                    <div className="fixed-bg bg-2">
                        <h1>Fixed Background scrolling</h1>
                    </div>
                    <div className="scroll-bg">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor tempor, posuere mi id, eleifend magna. Nulla at lectus magna.</h3>
                    </div>
                    <div className="fixed-bg bg-3">
                        <h1>Fixed Background scrolling</h1>
                    </div>
                </div>
            </div>
        );
    }
}