/* Keep in mind that this component can be reused for each page or 
modal created. Until the actual logo is created, a placeholder will
be set.*/

import React from 'react';

const Logo = (props) => {
    return (
        <img style={{ height: '150px', width: '150px' }} src="https://cdn.shopify.com/s/files/1/1061/1924/files/Ghost_Emoji.png?8026536574188759287"></img>
    )
}

export default Logo;