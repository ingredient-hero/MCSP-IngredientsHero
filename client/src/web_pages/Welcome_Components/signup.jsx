import React from 'react';

const SignUp = (props) => {

    if(props.hasClickedSignUp === true){
        
        return(
            <div className="SignUp">
            <form id='infos' action=''>
             Sign-Up <br/>
             Name:<input onChange={props.change} className='name' type='text' name='name'/>
             Username:<input onChange={props.change} className='userName' type='text' name='userName' /><br/>
             Password:<input onChange={props.change} className='password' type='text' name='password' />
             Email:<input onChange={props.change} className='email' type='text' name='email' />

            </form> 
             <button onClick={props.onSignupSubmitClick, props.grantUserAccess} className='Submit'> Submit</button>
             <button className='Cancel'> Cancel</button>
            </div>
        )
    }else{
        return(
            <>
            </>
        )
    }
}


export default SignUp;