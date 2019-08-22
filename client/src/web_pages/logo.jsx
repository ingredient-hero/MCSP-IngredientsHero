/* Keep in mind that this component can be reused for each page or 
modal created. Until the actual logo is created, a placeholder will
be set.*/

import React from 'react';

const Logo = (props) => {
    return (
        <img style={{ height: '150px', width: '8%' }} src="https://files.slack.com/files-pri/T1T555TL0-FMPHJS146/screen_shot_2019-08-22_at_2.29.05_pm.png"></img>
    )
}

export default Logo;