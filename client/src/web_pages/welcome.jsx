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

                <div className="wrapper">
                    <div className="fixed-bg bg-1">
                        <h1></h1>
                    </div>
                    <div className="scroll-bg">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor tempor, posuere mi id, eleifend magna. Nulla at lectus magna. Etiam sodales arcu at lectus porttitor accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur id urna dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin et pharetra justo, quis suscipit risus. Maecenas tincidunt efficitur ex in pharetra.</h3>
                    </div>
                    <div className="fixed-bg bg-2">
                        <h1></h1>
                    </div>
                    <div className="scroll-bg">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor tempor, posuere mi id, eleifend magna. Nulla at lectus magna.</h3>
                    </div>
                    <div className="fixed-bg bg-3">
                        <h1></h1>
                    </div>
                    <div className="scroll-bg">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor tempor, posuere mi id, eleifend magna. Nulla at lectus magna.</h3>
                    </div>
                    <div className="fixed-bg bg-4">
                        <h1></h1>
                    </div>
                </div>
            </div>
        );
    }
}