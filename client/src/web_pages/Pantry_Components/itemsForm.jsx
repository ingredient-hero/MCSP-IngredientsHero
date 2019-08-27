import React from 'react';

const ItemsForm = (props) => {
    if (props.addToButtonClicked === true) {
        return (
            <div className="SignUp">
                <form className='infos' action=''>
                    Add To Pantry <br/>
                    <input placeholder="Item Name" type='text' onChange={props.onChangeAddItem} className='item_name' name='item_name' /><br/>
                    <input placeholder="Expiration Date" type='text' onChange={props.onChangeAddItem} className='expiration' name='expiration' />
                </form>
                <div className='ItemButtonSubmit'>
                    <button className='Submit' onClick={() => {props.renderItemsForm(); props.onAddToPantry()}}>Add</button>
                </div>
                <div className="ItemButtonCancel">
                    <button className='Cancel' onClick={props.renderItemsForm}>Cancel</button>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}


export default ItemsForm;