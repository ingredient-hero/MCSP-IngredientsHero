/* Keep in mind that this component can be reused for each page or 
modal created. Until the actual logo is created, a placeholder will
be set.*/

import React from 'react';

const Logo = (props) => {
    return (
        <img style={{ height: '150px', width: '150px' }} src="https://files.slack.com/files-pri/T1T555TL0-FMBRQPK18/image_from_ios.jpg"></img>
    )
}

export default Logo;