import React from 'react';
import FoodItem from './foodItem.jsx';


const ListedItems = (props) => {
  const testingData = [ {item: 'milk', exp: '2019-08-24'}, {item: 'bread', exp: '2019-08-24'}, 
                        {item: 'pancake', exp: '2019-08-24'}, {item: 'beans', exp: '2019-08-24'}]
    return (
        <div id='perishableList'>
            <h1>Perishable Items</h1>
            {testingData.map( (element, index) => {
                return (
                  <FoodItem key={index} item={element.item} exp={element.exp}/>
                )
              }
            )}
        </div>
    )
}


export default ListedItems;