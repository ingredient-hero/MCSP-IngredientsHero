import React from 'react';
import NotificationItems from './recipes/notificationItems.jsx';

const testingData = [ {item: 'Eggs', exp: '2019-09-01'}, {item: 'Bread', exp: '2019-09-02'}, 
                      {item: 'Cream', exp: '2019-08-30'}, {item: 'Butter', exp: '2019-08-30'}]

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