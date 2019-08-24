import React from 'react';
import FoodItem from './foodItem.jsx';

const ListedItems = (props) => {
  const item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div>
            <h1>Perishable Items</h1>
            {item.map( (element, index) => {
                return (
                  <FoodItem key={index} item={element}/>
                )
              }
            )}
        </div>
    )
}


export default ListedItems;