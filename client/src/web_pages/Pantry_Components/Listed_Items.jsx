import React from 'react';
import FoodItem from './foodItem.jsx';
import Logo from '../logo.jsx'



const ListedItems = (props) => {
  
    return (
      <div id='logo'>
        <Logo />
        <div id='perishableList'>

            <h1 className='recipeInst'>Perishable Items</h1>
            <button id="pantryAdd" onClick={props.renderItemsForm}>Add To Pantry</button> 
            {props.userPantry.map( (element, index) => {
            //  console.log(element.expiration)
              // console.log(props.userPantry, 'pantry items')
              element.item_name = element.item_name.charAt(0).toUpperCase() + element.item_name.slice(1);
              return (
                <FoodItem key={index} removeFromPantry={props.removeFromPantry} item={element.item_name} exp={element.expiration}/>
                )
              }
              )}
        </div>
      </div>
    )
}


export default ListedItems;