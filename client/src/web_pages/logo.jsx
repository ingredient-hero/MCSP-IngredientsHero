/* Keep in mind that this component can be reused for each page or 
modal created. Until the actual logo is created, a placeholder will
be set.*/

import React from 'react';

const Logo = (props) => {
    return (
    <div>
    <img style={{ height: '150px', width: '8%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0h2Xm3k3gqNJADVF4ao3yUS4s1VYCogItan-HxnQF29Jeapuq"></img>
    <img style={{opacity: '0.7', filter: 'alpha(opacity=50)'}} src="https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>

    </div>
        )
    }



   

export default Logo;