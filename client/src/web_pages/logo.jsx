/* Keep in mind that this component can be reused for each page or 
modal created. Until the actual logo is created, a placeholder will
be set.*/

import React from 'react';

const Logo = (props) => {
    return (
        <img style={{ height: '150px', width: '175px' }} src="https://ingredienthero.s3.us-east-2.amazonaws.com/Image+from+iOS.jpg"></img>
    )
}

export default Logo;