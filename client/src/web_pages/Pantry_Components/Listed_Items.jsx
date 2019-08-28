import React from 'react';
import FoodItem from './foodItem.jsx';
import Logo from '../logo.jsx'



const ListedItems = (props) => {
  const testingData = [ {item: 'milk', exp: '2019-08-24'}, {item: 'bread', exp: '2019-08-24'}, 
                        {item: 'pancake', exp: '2019-08-24'}, {item: 'beans', exp: '2019-08-24'}]
    return (
      <div id='logo'>
        <Logo />
        <div id='perishableList'>

            <h1 className='recipeInst'>Perishable Items</h1>
            <button id="pantryAdd" onClick={props.renderItemsForm}>Add To Pantry</button> 
            {props.userPantry.map( (element, index) => {
              console.log(element.expiration)
              element.item_name = element.item_name.charAt(0).toUpperCase() + element.item_name.slice(1);
              return (
                <FoodItem key={index} item={element.item_name} exp={element.expiration}/>
                )
              }
              )}
        </div>
      </div>
    )
}


export default ListedItems;