import React from 'react';
import ReactDom from'react-dom';

const NotificationModal = (props) => {
    let currentDate = new Date()
    
    return(
        <div className="notification">
          {props.users.map((user,i) => {
            if(this.props.expiration  <= currentDate - 3){

              <li>
             {/* this is a list that shows food that is about to expire */}
             </li>
            
            // <button className='Cancel'> Cancel</button>
            }
             
        }
          )}
        
        </div>
            
     )
}


export default NotificationModal;
