import React from 'react';
import ReactDom from'react-dom'
import bootbox from 'bootbox';
import bootstrap from 'bootstrap'




const Welcome = ({user, onSignOut})=> {
    // This is a dumb "stateless" component
    return (
        <div>
        Welcome <strong>{user.username}</strong>!
        <a href="javascript:;" onClick={onSignOut}>Sign out</a>
        </div>
        )
    }
    
    
    export default Welcome;