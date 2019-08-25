import React from 'react';
import NotificationItems from './recipes/notificationItems.jsx';

const testingData = [ {item: 'milk', exp: '2019-08-24'}, {item: 'bread', exp: '2019-08-24'}, 
                      {item: 'pancake', exp: '2019-08-24'}, {item: 'beans', exp: '2019-08-24'}]

const NotificationModal = (props) => {
    if (props.hasClickedNotifications === true) {
      return (
        <div className= "NotificationModal">
          <h1 style={{ color: 'red' }}> Your Food is Nearing Expiration </h1>
           {testingData.map((item, index) => {
             return (
               <NotificationItems key={index} item={item.item} exp={item.exp} />
             )
           })}
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