import React from 'react';

const SignUp = (props) => {

    if(props.hasClickedSignUp === true){
        
        return(
            <div className="SignUp">
            
                <form className='infos' action=''>
                Sign-Up <br/>
                {/* <label> */}
                <input placeholder='Name' onChange={props.change} className='name' type='text' name='name'/>
                <input placeholder='Username' onChange={props.change} className='userName' type='text' name='userName' /> <br/>
                <input placeholder='Password' onChange={props.change} className='password' type='password' name='password' />
                <input placeholder='Email' onChange={props.change} className='email' type='text' name='email' />
                {/* </label> */}
                </form> 

                <div className='SignUpButtons'>

                <button onClick={() => {props.onSignupSubmitClick(); props.grantUserAccess();}} className='Submit'> Submit</button>

                <button className='Cancel' onClick={props.onClickSignUp}> Cancel</button>
                </div>
            </div>
        )
    }else{
        return(
            <div>
            </div>
        )
    }
}


export default SignUp;