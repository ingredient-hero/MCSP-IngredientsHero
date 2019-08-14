import React from 'react';
import ReactDom from'react-dom'
import bootbox from 'bootbox';
import bootstrap from 'bootstrap'

const SignUp = (props) => {

    return(
        <div>
        
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#SignUp">
            Sign-Up
            </button>

            <div className="modal fade" id="SignUp" tabIndex="-1" role="dialog" aria-labelledby="SignUpTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Create Account</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <input placeholder='Name'></input>
                    <input placeholder='Username'></input>
                    <input placeholder='Password'></input>
                    <input placeholder='E-mail'></input>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary">Confirm</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SignUp;