import React from 'react';

const FoodItem = (props) => {
    return (
        <div className='foodItems'>
            <p className='foodItem'>Item: {props.item}  Expiration Date: {props.exp}    
               <label>
                   <button id='buttonRight' onClick={() => {console.log('Fuck it')}}>Remove</button>
                </label> 
            </p> 
        </div>
    )
}

export default FoodItem;