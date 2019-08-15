import React from 'react';
import Logo from './logo';


// You may need to import more libraries or files, depending on what's required.


export default class Pantry extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            userPantry: {}, //this will be an object that contains the users pantry information

        }
    }


    // This function is to grab the information from the database that 
    // the single user will need for their pantry page. 
    componentDidMount () {
        axios.get('/mypantry')
            .then ( response => {
                this.setState({
                    userPantry: response.data
                })
            })
    }


    render () {
        <div>
            {/* later, the title can include the users name once the database is set up */}
            <title>Pantry</title> 
            <Logo />
            <head id={pantryAdd} onClick={}>Add to pantry</head>
            {/* Here will be the recipes component. Props may need to be sent to find recipes based on ingredients.*/}
            {/* We will also have a list component with all of the ingredients. Items will be passed as a prop
            to get the items to render within here. */}
        </div>
        
    }
}