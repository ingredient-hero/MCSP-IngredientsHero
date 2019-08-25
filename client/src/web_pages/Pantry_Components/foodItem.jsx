import React from 'react';

const FoodItem = (props) => {
    return (
        <div id='foodItem'>
            <p>Item: {props.item} Expirtion Date: {props.exp}
            <button onClick={() => {console.log('Fuck it')}}>Remove</button>
            </p> 
        </div>
    )
}

export default FoodItem;