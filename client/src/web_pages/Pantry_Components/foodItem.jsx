import React from 'react';

const FoodItem = (props) => {
    return (
        <div className='foodItems'>
            <p className='foodItem'>Item: {props.item}  Expirtion Date: {props.exp}
                <button id='buttonRight' onClick={() => {console.log('Fuck it')}}>Remove</button>
            </p> 
        </div>
    )
}

export default FoodItem;