import React from 'react';


const NotificationItems = (props) => {
  return (
    <div>
      <p style={{ color: 'white' }}>{props.item} {props.exp}</p> 
    </div>
    )

}

export default NotificationItems;