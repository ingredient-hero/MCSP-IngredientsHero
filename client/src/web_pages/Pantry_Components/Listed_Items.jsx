import React from 'react';
import FoodItem from './foodItem.jsx';

const ListedItems = (props) => {
  const items = ['Milk', 'Eggs', 'Beans', 'Bread', ]
    return (
        <div>
            <h1>Perishable Items</h1>
            {items.map( (element, index) => {
                return (
                  <FoodItem key={index} item={element}/>
                )
              }
            )}
        </div>
    )
}


export default ListedItems;