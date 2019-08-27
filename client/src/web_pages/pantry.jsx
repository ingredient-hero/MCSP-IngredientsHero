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
            randomRecipes: this.props.recipes,
            pantryRecipes: [],
            changeRecipes: false,
        }
        this.renderItemsForm = this.renderItemsForm.bind(this);
        // this.addButtonClicked = this.addButtonClicked.bind(this);
        this.onAddToPantry = this.onAddToPantry.bind(this);
        this.clickSort = this.clickSort.bind(this);
        this.onChangeRecipes = this.onChangeRecipes.bind(this);
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

      onChangeRecipes (e) {
          this.setState({changeRecipes: !this.state.changeRecipes});
      }

      clickSort (e) {
        document.getElementById("myDropdown").classList.toggle("show");
      }


    //Once information is passing back and forth, I can finish this component did mount. Particularly in the ingredients and .then
    componentDidMount () {
        axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=apples,+flour,+sugar&number=2`)
        .then( res => {
            axios.get(`https://api.spoonacular.com/recipes/{id}/information?apiKey=${REACT_APP_API_KEY}`)
            
        })
        .catch( err => {
            if (err) {
                console.error(err);
            }
        })
    }

    this.setState({pantryRecipes: res.data});


    render () {
        return (
            <div id='pantry'>
                {/* later, the title can include the users name once the database is set up */}
                <title>Pantry</title> 
                {/* <h1 className='Title'> Ingredient Hero</h1> */}
                {/* <Logo /> */}
                <NotificationModal clickedNotifications={this.props.clickedNotifications} 
                hasClickedNotifications={this.props.hasClickedNotifications}/>
                <div className='pantryButtons'>
                    <div className='Notification'>
                <button onClick={this.props.clickedNotifications}>
                Notifications
                </button>
                <div className='badge'>{4}</div>
                    </div>
                <button className='Logout' onClick={this.props.logoutUser}>
                Logout
                </button>
                </div>
                {/* <Logo /> */}
                {/* In css, the button will need to be changed so people know it can be clicked. Add at least a hover element. */}
                
                {/* Here will be the recipes component. Props may need to be sent to find recipes based on ingredients.*/}
                {/* We will also have a list component with all of the ingredients. Items will be passed as a prop
                to get the items to render within here. */}

                {/* <div>
                    <h1 id='suggestedTitle'>SUGGESTED RECIPES</h1>
                    <RecipeBox randomRecipes={this.state.randomRecipes} pantryRecipes={this.state.pantryRecipes}
                    changeRecipes={this.state.changeRecipes}/>
                </div> */}
                <div className="dropdown">
                    <button onClick={this.clickSort} className="dropbtn">Sort</button>
                    <div id="myDropdown" className="dropdown-content">
                        <a href='#' onClick={this.onChangeRecipes}>Find Me Random Recipes</a>
                        <a href='#' onClick={this.onChangeRecipes}>Suggest Recipes Based on My Pantry</a>
                    </div>
                </div>
                <ListedItems userPantry={this.state.userPantry} renderItemsForm={this.renderItemsForm}/>
                <ItemsForm onChangeAddItem={this.props.onChangeAddItem} onAddToPantry={this.onAddToPantry} 
                addButtonClicked={this.addButtonClicked} isOpen={this.props.isOpen} toggleModal={this.props.toggleModal}
                addToButtonClicked={this.state.addToButtonClicked} renderItemsForm={this.renderItemsForm}/>
            </div> 
        )
    }

}