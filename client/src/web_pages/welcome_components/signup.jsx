import React from 'react';
import ReactDom from 'react-dom'
import bootbox from 'bootbox';
import bootstrap from 'bootstrap'

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
             <button onClick={props.onSignupSubmitClick} className='Submit'> Submit</button>
             <button className='Cancel'> Cancel</button>
            </form> 
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