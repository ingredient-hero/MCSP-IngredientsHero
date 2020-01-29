import React from 'react';

const FoodItem = (props) => {
    return (
        <div className='foodItems'>
            <p className='foodItem' name={props.item}>Item: {props.item}  Expiration Date: {props.exp}    
               <label>
                   <button id='buttonRight' onClick={props.onRemoveFromPantry}>Remove</button>
                </label> 
            </p> 
        </div>
    )
}

export default FoodItem;