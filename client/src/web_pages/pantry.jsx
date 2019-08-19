import React from 'react';
import Logo from './logo.jsx';
import $ from "jquery";
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import bootbox from 'bootbox';


// You may need to import more libraries or files, depending on what's required.


export default class Pantry extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            userPantry: {}, //this will be an object that contains the users pantry information
            addItemsClicks: 0
        }
        this.onAddToPantry = this.onAddToPantry.bind(this);
    }


    onAddToPantry () {
        if (this.state.addItemsClicks === 0) {
            this.setState({
                addItemsClicks: 1
            })
            bootbox.confirm("<form id='infos' action=''>\
                    Item Name:<input type='text' name='first_name' /><br/>\
                    Expiration Date:<input type='text' name='last_name' />\
                    </form>", function(result) {if(result)$('#infos').submit(function (event) {
                        console.log('Hey')
                    });
                });
        }
        if (this.state.addItemsClicks > 0) {
            this.setState({
                addItemsClicks: 0
            })
        }
    }

    // This function is to grab the information from the database that 
    // the single user will need for their pantry page. 
    componentDidMount () {
        // axios.get('/mypantry')
        //     .then ( response => {
        //         this.setState({
        //             userPantry: response.data
        //         })
        //     })
    }


    render () {
        return (
            <div>
                {/* later, the title can include the users name once the database is set up */}
                <title>Pantry</title> 
                <Logo />
                {/* In css, the head will need to be changed so people know it can be clicked. Add at least a hover element. */}
                <p id="pantryAdd" onClick={this.onAddToPantry}>Add to pantry</p>
                {/* Here will be the recipes component. Props may need to be sent to find recipes based on ingredients.*/}
                {/* We will also have a list component with all of the ingredients. Items will be passed as a prop
                to get the items to render within here. */}
            </div> 

        )
    }
}

