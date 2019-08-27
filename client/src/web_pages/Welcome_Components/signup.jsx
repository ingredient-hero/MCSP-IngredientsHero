import React from 'react';

const SignUp = (props) => {
    

    if(props.hasClickedSignUp === true){
        
        return(
            <div className="SignUp">
            
                <form className='infos' action=''>
                Sign-Up <br/>
                Name:<input onChange={props.onChangeLogin} className='name' type='text' name='name'/>
                Username:<input onChange={props.onChangeLogin} className='userName' type='text' name='userName' /><br/>
                Password:<input onChange={props.onChangeLogin} className='password' type='password' name='password' />
                Email:<input onChange={props.onChangeLogin} className='email' type='text' name='email' />
                </form> 

                <div className='SignUpButtons'>

                <button onClick={()=>{props.onSignUpSubmitClick();}} className='Submit'> Submit</button>

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