import React from 'react';

const SignUp = (props) => {
    

    if(props.hasClickedSignUp === true){
        
        return(
            <div className="SignUp">
            
                <form className='infos' action=''>
                Sign-Up <br/>
                < input placeholder="Name" onChange={props.onChangeLogin} className='name' type='text' name='name'/>
                <div className="divider"></div>
                < input placeholder="Username" onChange={props.onChangeLogin} className='userName' type='text' name='userName' /><br/>
                < input placeholder="Password" onChange={props.onChangeLogin} className='password' type='password' name='password' />
                <div className="divider"></div>
                < input placeholder="Email" onChange={props.onChangeLogin} className='email' type='text' name='email' />
                </form> 

                <div className='SignUpButtonSubmit'>
                    <button onClick={()=>{props.onSignUpSubmitClick();}} className='Submit'> Submit</button>
                </div>
                <div className="SignUpButtonCancel">
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