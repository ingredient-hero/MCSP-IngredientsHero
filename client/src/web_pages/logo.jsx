/* Keep in mind that this component can be reused for each page or 
modal created. Until the actual logo is created, a placeholder will
be set.*/

import React from 'react';

const Logo = (props) => {
    return (
        <img id='logoImage' src="https://ingredienthero.s3.us-east-2.amazonaws.com/Hero4.png"></img>
    )
}

export default Logo;
