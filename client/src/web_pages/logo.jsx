/* Keep in mind that this component can be reused for each page or 
modal created. Until the actual logo is created, a placeholder will
be set.*/

import React from 'react';

const Logo = (props) => {
    return (
        <img style={{ height: '150px', width: '8%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0h2Xm3k3gqNJADVF4ao3yUS4s1VYCogItan-HxnQF29Jeapuq"></img>
    )
}

export default Logo;