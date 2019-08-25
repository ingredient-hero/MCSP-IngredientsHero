import React from 'react';

const FoodItem = (props) => {
    return (
        <div>
            <p>{props.item}
            <button onClick={() => {console.log('Fuck it')}}>Remove Item</button>
            </p> 
        </div>
    )
}

export default FoodItem;