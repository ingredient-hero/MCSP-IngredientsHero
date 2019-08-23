import React from 'react';
import ReactDom from'react-dom';
// import data from './dummy_data.js';
import Modal from '../Welcome_Components/modal.jsx';

const testingData = [{item: 'milk', exp: '2019-08-24'}, {item: 'bread', exp: '2019-08-24'}, {item: 'pancake', exp: '2019-08-24'}, {item: 'beans', exp: '2019-08-24'}]

export default class NotificationModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          isOpen: false, 
      };
     
      this.toggleModal=this.toggleModal.bind(this)
    }
  
    toggleModal () {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  
    render() {
         let currentDate = new Date()
      return (
        <div className="ExpiredFood">
          <button onClick={this.toggleModal} style={{marginLeft: "1300px"}}>
            Notification
          </button>
  
          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>
            <h1>Food Is About to Expire</h1>
            <form> 
            {testingData.map((item, index) => {
                // console.log(user)
                // console.log(new Date(user.expiration) <= currentDate-3,'compare')
                if(item.item && new Date(item.exp) >= currentDate - 3){
                 return(
                    <div key={index}>
                      <li>{item.item} {item.exp}</li>
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


