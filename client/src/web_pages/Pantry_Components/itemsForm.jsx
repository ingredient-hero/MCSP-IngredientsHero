import React from 'react';


const ItemsFrom = (props) => {
    return (
        <form id='infos' action=''>\
            Item Name:<input type='text' onChange={props.onChangeAddItem} className='item_name' name='item_name' /><br/>\
            Expiration Date:<input type='text' onChange={props.onChangeAddItem} className='expiration' name='expiration' />\
        </form>
    )
}

export default ItemsFrom;