import React from 'react';

const testingData = [ {item: 'milk', exp: '2019-08-24'}, {item: 'bread', exp: '2019-08-24'}, 
                      {item: 'pancake', exp: '2019-08-24'}, {item: 'beans', exp: '2019-08-24'}]

const NotificationModal = (props) => {
    let currentDate = new Date();
    if (props.hasClickedNotifications === true) {
      return (
        <div className="SignUp">
            <h1>Food Is About to Expire</h1>
            <div> 
            {testingData.map((item, index) => {
                // if(item.exp && new Date(item.exp) >= currentDate - 3){
                  return(
                    <div key={index}>
                      <li>{item.item} {item.exp}</li>
                    </div>
                  )
                // }
            })}
            </div>
            <button onClick={props.clickedNotifications}>Close</button>
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }

  export default NotificationModal;


