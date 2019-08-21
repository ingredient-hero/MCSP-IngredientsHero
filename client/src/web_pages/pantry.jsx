import React from 'react';
import Logo from './logo.jsx';
import ItemsForm from './Pantry_Components/itemsForm.jsx';
import axios from 'axios';
import ListedItems from './Pantry_Components/Listed_Items.jsx'
// import NotificationModal from './Pantry_Components/notificationModal.jsx';
// import ListedItems from './Pantry_Components/Listed_Items.jsx';

// You may need to import more libraries or files, depending on what's required.


export default class Pantry extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            userPantry: {}, //this will be an object that contains the users pantry information 
            addToButtonClicked: false,
            item_name: this.props.item_name,
            expiration: this.props.expiration,
        }
        this.renderItemsForm = this.renderItemsForm.bind(this);
        this.addButtonClicked = this.addButtonClicked.bind(this);
        this.onAddToPantry = this.onAddToPantry.bind(this);
    }

    renderItemsForm (e) {
       this.setState({
           addToButtonClicked: true,
       })
    }

    addButtonClicked (e) {
        this.setState({
            addToButtonClicked: false,
        })
    }

    onAddToPantry () {
        const addItem = {
          item: this.state.item_name,
          exp: this.state.expiration
        };
        axios.post('/addingtopantry', addItem)
          .then( response => {
            console.log(response.data);
          })
      }


    // This function is to grab the information from the database that 
    // the single user will need for their pantry page. 
    // componentDidMount () {
        // axios.get('/mypantry')
        //     .then ( response => {
        //         this.setState({
        //             userPantry: response.data
        //         })
        //     })
    // }


    render () {
        if (this.state.addToButtonClicked === true) {
            return (
                <div> 
                    <ItemsForm onChangeAddItem={this.props.onChangeAddItem} onAddToPantry={this.onAddToPantry} 
                    addButtonClicked={this.addButtonClicked}/>
                    {/* Once everything is completed below with pantry, recipes, etc, it can be pasted here
                    to build the modal appearance as a quick work around for the conditional rendering.
                    Or, a better work around, if it works will be to place the ItemsForm below, no
                    conditional rendering, but make the css completely transparent until the button is clicked, 
                    and then the css switches. This can be done separately with conditionals that change the 
                    class name on the click. */}
                </div>
            )
        } else {
            return (
                <div>
                    {/* later, the title can include the users name once the database is set up */}
                    <title>Pantry</title> 
                    {/* <NotificationModal /> */}
                    <Logo />
                    {/* In css, the button will need to be changed so people know it can be clicked. Add at least a hover element. */}
                    <button id="pantryAdd" onClick={this.renderItemsForm}>Add To Pantry</button>
                    {/* Here will be the recipes component. Props may need to be sent to find recipes based on ingredients.*/}
                    {/* We will also have a list component with all of the ingredients. Items will be passed as a prop
                    to get the items to render within here. */}
                    {/* <ItemsForm onChangeAddItem={this.props.onChangeAddItem} onAddToPantry={this.props.onAddToPantry}/> */}
                    {/* <ListedItems/> */}
                </div> 
    
            )
        }
    }
}