import React from 'react';

const ItemsForm = (props) => {
    if (props.addToButtonClicked === true) {
        return (
            <div className="SignUp">
                <form id='infos' action=''>
                    Item Name:<input type='text' onChange={props.onChangeAddItem} className='item_name' name='item_name' /><br/>
                    Expiration Date:<input type='text' onChange={props.onChangeAddItem} className='expiration' name='expiration' />
                </form>
                <button onClick={() => {props.renderItemsForm(); props.onAddToPantry()}}>Add</button>
                <button onClick={props.renderItemsForm}>Cancel</button>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}


export default ItemsForm;