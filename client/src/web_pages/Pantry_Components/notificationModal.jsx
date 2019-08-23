import React from 'react';
import ReactDom from'react-dom';
import data from './dummy_data.js';
import Modal from '../Welcome_Components/modal.jsx';

export default class NotificationModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
           
      };
     
      
    }
  
    
  
    render() {
         let currentDate = new Date()
      return (
        <div className="ExpiredFood">
          <button onClick={this.props.toggleModal} style={{marginLeft: "1300px"}}>
            Notification
          </button>
  
          <Modal show={!this.props.isOpen}
            onClose={this.props.toggleModal}>
            <h1>Food Is About to Expire</h1>
            <form> 
            {data.data.map((user) => {
                console.log(user)
                console.log(new Date(user.expiration) <= currentDate-3,'compare')
                if(user.name && new Date(user.expiration) >= currentDate - 3){
                 return(
                    <div>
                           <li key={user.name}>{user.item} {user.expiration}</li>
                        </div>
                        
                    )
                }
            })}
            </form>
          </Modal>
        </div>
      );
    }
  }

// const NotificationModal = (props) => {
//     let currentDate = new Date()
//     console.log(currentDate,'today')
//     return(
//         <div className="notification">
//         {/* {console.log(data.data[0],'data')} */}
//         {data.data.map((user) => {
//                 console.log(user.expiration)
//                 console.log(new Date(user.expiration) <= currentDate-3,'compare')
//                 if(new Date(user.expiration) >= currentDate - 3){
//                  return(
//                     <div>
//                            {user.item} {user.expiration}
//                         </div>
                        
//                  )
//                 }
//         })}
          {/* {props.users.map((user,i) => { */}
            {/* if(this.props.expiration  <= currentDate - 3){ */}

              // <li>
             {/* this is a list that shows food that is about to expire */}
            //  </li>
            
             {/* <button className='Cancel'> Cancel</button> */}
            {/* } */}
             
        {/* } */}
          {/* )} */}
        
//         </div>
            
//      )
// }


