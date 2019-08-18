import React from 'react';
import Logo from './logo.jsx';
import ItemsForm from './Pantry_Components/itemsForm.jsx'

// You may need to import more libraries or files, depending on what's required.


export default class Pantry extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            userPantry: {}, //this will be an object that contains the users pantry information 
            addButtonClicked: false,
        }
        // this.renderItemsForm = this.renderItemsForm.bind(this);
    }

    // renderItemsForm (e) {
    //     return (
    //         <ItemsForm onChangeAddItem={this.props.onChangeAddItem}/>
    //     )
    // }


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
        // if (this.addButtonClicked === true) {
        //     return (
        //         <ItemsForm onChangeAddItem={this.props.onChangeAddItem}/>
        //     )
        // }
        return (
            <div>
                {/* later, the title can include the users name once the database is set up */}
                <title>Pantry</title> 
                <Logo />
                {/* In css, the button will need to be changed so people know it can be clicked. Add at least a hover element. */}
                <button id="pantryAdd" onClick={this.renderItemsForm}>Add To Pantry</button>
                {/* Here will be the recipes component. Props may need to be sent to find recipes based on ingredients.*/}
                {/* We will also have a list component with all of the ingredients. Items will be passed as a prop
                to get the items to render within here. */}
                <ItemsForm onChangeAddItem={this.props.onChangeAddItem} onAddToPantry={this.props.onAddToPantry}/>
                
            </div> 

        )
    }
}

