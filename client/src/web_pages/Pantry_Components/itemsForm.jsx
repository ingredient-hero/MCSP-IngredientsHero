import React from 'react';

const ItemsForm = (props) => {
    if (props.addItem === true) {
        return (
            <div className="SignUp">
            <button onClick={props.toggleModal} style={{marginLeft: "1300px"}}>
            Add To Pantry
              </button>
                <form id='infos' action=''>
                    Item Name:<input type='text' onChange={props.onChangeAddItem} className='item_name' name='item_name' /><br/>
                    Expiration Date:<input type='text' onChange={props.onChangeAddItem} className='expiration' name='expiration' />
                </form>
                <button onClick={() => {props.addButtonClicked(); props.onAddToPantry()}}>Add</button>
                <button onClick={this.props.}>Cancel</button>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}


export default ItemsForm;