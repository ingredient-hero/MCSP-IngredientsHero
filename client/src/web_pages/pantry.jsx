import React from 'react';
import Logo from './logo.jsx';
import ItemsForm from './Pantry_Components/itemsForm.jsx';
import axios from 'axios';
import ListedItems from './Pantry_Components/Listed_Items.jsx'
import NotificationModal from './Pantry_Components/notificationModal.jsx';
import RecipeBox from './Pantry_Components/recipeBox.jsx';
import REACT_APP_API_KEY from '../../../api.js';

// You may need to import more libraries or files, depending on what's required.


export default class Pantry extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            userPantry: [], //this will be an object that contains the users pantry information 
            addToButtonClicked: false,
            item_name: this.props.item_name,
            expiration: this.props.expiration,
            recipes: this.props.recipes,
        }
        this.renderItemsForm = this.renderItemsForm.bind(this);
        // this.addButtonClicked = this.addButtonClicked.bind(this);
        this.onAddToPantry = this.onAddToPantry.bind(this);
    }

    renderItemsForm (e) {
       this.setState({
           addToButtonClicked: !this.state.addToButtonClicked,
       })
    }

    // addButtonClicked (e) {
    //     this.setState({
    //         addToButtonClicked: false,
    //     })
    // }

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
        return (
            <div id='pantry'>
                {/* later, the title can include the users name once the database is set up */}
                <title>Pantry</title> 
                {/* <h1 className='Title'> Ingredient Hero</h1> */}
                {/* <Logo /> */}
                <NotificationModal clickedNotifications={this.props.clickedNotifications} 
                hasClickedNotifications={this.props.hasClickedNotifications}/>
                <button onClick={this.props.clickedNotifications} style={{marginLeft: "1300px", borderRadius: "50%"}}>
                Notifications
                </button>
                {/* <Logo /> */}
                {/* In css, the button will need to be changed so people know it can be clicked. Add at least a hover element. */}
                
                {/* Here will be the recipes component. Props may need to be sent to find recipes based on ingredients.*/}
                {/* We will also have a list component with all of the ingredients. Items will be passed as a prop
                to get the items to render within here. */}

                <div>
                    <h1 id='suggestedTitle'>Suggested Recipes</h1>
                    <RecipeBox recipes={this.state.recipes}/>
                </div>
                <ListedItems userPantry={this.state.userPantry} renderItemsForm={this.renderItemsForm}/>
                <ItemsForm onChangeAddItem={this.props.onChangeAddItem} onAddToPantry={this.onAddToPantry} 
                addButtonClicked={this.addButtonClicked} isOpen={this.props.isOpen} toggleModal={this.props.toggleModal}
                addToButtonClicked={this.state.addToButtonClicked} renderItemsForm={this.renderItemsForm}/>
            </div> 
        )
    }

}