import React from 'react';
import ReactDom from'react-dom'
import bootbox from 'bootbox';
import bootstrap from 'bootstrap'

const LoginModal = (props) => {

    return(
        <div>
        
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#Login">
            Login
            </button>

           
        </div>
    )
}

export default LoginModal;