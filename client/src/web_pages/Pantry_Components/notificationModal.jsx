import React from 'react';

const testingData = [ {item: 'milk', exp: '2019-08-24'}, {item: 'bread', exp: '2019-08-24'}, 
                      {item: 'pancake', exp: '2019-08-24'}, {item: 'beans', exp: '2019-08-24'}]

const NotificationModal = (props) => {
    let currentDate = new Date()
    return (
      <div className="ExpiredFood">
        <button onClick={props.toggleModal} style={{marginLeft: "1300px", borderRadius: "50%"}}>
          Notification
        </button>
          <h1>Food Is About to Expire</h1>
          <form> 
          {testingData.map((item, index) => {
              if(item.item && new Date(item.exp) >= currentDate - 3){
                return(
                  <div key={index}>
                    <li>{item.item} {item.exp}</li>
                  </div>
                      
                  )
              }
          })}
          </form>
      </div>
    );
  }

  export default NotificationModal;

  // <Modal show={!this.props.isOpen}
  // onClose={this.props.toggleModal}>