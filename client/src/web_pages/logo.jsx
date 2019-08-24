/* Keep in mind that this component can be reused for each page or 
modal created. Until the actual logo is created, a placeholder will
be set.*/

import React from 'react';

const Logo = (props) => {
    return (
        <img style={{ height: '150px', width: '150px' }} src="https://ingredienthero.s3.us-east-2.amazonaws.com/02ef92f8-447d-4425-bf6d-b212c477905c_200x200.png"></img>
    )
}

export default Logo;