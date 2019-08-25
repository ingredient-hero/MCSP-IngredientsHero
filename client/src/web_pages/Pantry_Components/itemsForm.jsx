import React from 'react';
import Modal from '../Welcome_Components/modal.jsx'

const ItemsForm = (props) => {
    return (
        <div className="Itemsform">
        <button onClick={props.toggleModal} style={{marginLeft: "1300px"}}>
        Add To Pantry
          </button>
            <Modal show={props.isOpen}
            onClose={props.toggleModal}>
            <form id='infos' action=''>
                Item Name:<input type='text' onChange={props.onChangeAddItem} className='item_name' name='item_name' /><br/>
                Expiration Date:<input type='text' onChange={props.onChangeAddItem} className='expiration' name='expiration' />
            </form>
            <button onClick={() => {props.addButtonClicked(); props.onAddToPantry()}}>Add</button>
            
            </Modal>
        </div>
    )
}


export default ItemsForm;