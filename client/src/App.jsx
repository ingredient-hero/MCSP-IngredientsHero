import React from 'react';
import Welcome from './web_pages/welcome.jsx';
import Pantry from './web_pages/pantry.jsx';
import axios from 'axios';
import REACT_APP_API_KEY from '../../api.js';


export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        UserID: 0,
        userName: '',
        password: '',
        email: '',
        SignUp: '',
        Login: '',
        item_name: '',
        expiration: '',
        hasClickedSignUp: false,
        userGrantedAccess: false,
        isOpen: false,
        recipes: {},
        users: {},
        hasClickedLogin: false,
        hasClickedNotifications: false,
        userPantry: [],
      };
        this.onAddToPantry = this.onAddToPantry.bind(this);
        this.onSignUpSubmitClick = this.onSignUpSubmitClick.bind(this);
        this.onChangeLogin = this.onChangeLogin.bind(this)
        this.onChangeAddItem = this.onChangeAddItem.bind(this);
        this.onClickSignUp = this.onClickSignUp.bind(this);
        this.onLoginSubmitClick = this.onLoginSubmitClick.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.onClickLogin = this.onClickLogin.bind(this);
        this.clickedNotifications = this.clickedNotifications.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
        this.onRemoveFromPantry = this.onRemoveFromPantry.bind(this);
    }


    onClickSignUp(e){
      
      this.setState({hasClickedSignUp: !this.state.hasClickedSignUp})
    }

    onClickLogin(e){   
      this.setState({
        hasClickedLogin: true
      })
    }

    onChangeLogin(event){
      this.setState({
        [event.target.name]: event.target.value,
      })
    }       

    onChangeAddItem (event) {
      this.setState ({
          [event.target.name]: event.target.value
      })
    }

    // grantUserAccess (event) {
    //   this.setState({userGrantedAccess: true});
    // } 

    logoutUser(e){
      this.setState({
        userGrantedAccess: false,
        isOpen: false,
        hasClickedSignUp: false
      });
    }
  
    toggleModal () {
      this.setState({isOpen: !this.state.isOpen});
    }

    clickedNotifications (e) {
      this.setState({hasClickedNotifications: !this.state.hasClickedNotifications})
    }

    onSignUpSubmitClick(e){
      axios.post('/mysignup',{
          name: this.state.name,
          userName: this.state.userName,
          password: this.state.password,
          email: this.state.email
      })
      .then(() => {
        if(this.state.name.length > 0 && this.state.userName.length > 0 && this.state.password.length > 0 && this.state.email.length > 0){
         this.setState({userGrantedAccess: true})
        }
      })
      .catch(error => console.log(error))
  }
  

  onLoginSubmitClick(e){
      let user = [];
     axios.get('/mylogin', {params:{userName:this.state.userName, password:this.state.password}})
     .then(res => {
        this.setState({
          users: res.data[0],
          userPantry: res.data[1],
        })
      })
      .then(() => {
          if( this.state.userName == this.state.users.userName && this.state.password === this.state.users.password){
            this.setState({ 
              userGrantedAccess: true,
              UserID: this.state.users.UserID,
            })
          }
      })
    .catch((err) => { console.log(err); });
}

onRemoveFromPantry (event) {
  for (let i = 0; i < this.state.userPantry.length; i++) {
    if (this.state.userPantry[i] == event.target.name) {
      this.state.userPantry.splice(i, 1);

    }
  }
  console.log(this.state.userPantry);
}


onAddToPantry () {

  const newItems = {
    item_name: this.state.item_name, 
    expiration: this.state.expiration
  }

  this.state.userPantry.push(newItems);

  axios.post('/addingtopantry', {
    item_name: this.state.item_name,
    expiration: this.state.expiration,
    UserID:this.state.UserID
    })
}


onChangeRecipes (e) {
    this.setState({changeRecipes: !this.state.changeRecipes});
}

clickSort (e) {
  document.getElementById("myDropdown").classList.toggle("show");
}

componentDidMount () {
  axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${REACT_APP_API_KEY}&number=10`)
  .then( res => {
      this.setState({recipes: res.data});
  })
  .catch( err => {
      if (err) {
          console.error(err);
      }
  })
}


   render() {
      if (this.state.userGrantedAccess === false) {
        return (
          <Welcome onSignUpSubmitClick={this.onSignUpSubmitClick} hasClickedSignUp={this.state.hasClickedSignUp} user={this.state.userName} 
          password={this.state.password} change={this.onChangeSignUp} onLoginSubmitClick={this.onLoginSubmitClick}
          onClickLogin={this.onClickLogin} onClickSignUp={this.onClickSignUp} name={this.state.name} 
          username={this.state.userName} password={this.state.password} email={this.state.email} 
          SignUp={this.state.SignUp} Login={this.state.Login} onChangeLogin={this.onChangeLogin} 
          isOpen={this.state.isOpen} toggleModal={this.toggleModal}/>
        )
      } else {
        return ( 
            <Pantry onAddToPantry={this.onAddToPantry}  logoutUser={this.logoutUser} expiration={this.state.expiration} onChangeAddItem={this.onChangeAddItem} 
            item_name={this.state.item_name} expiration={this.state.expiration} isOpen={this.state.isOpen}
            toggleModal={this.toggleModal} recipes={this.state.recipes} clickedNotifications={this.clickedNotifications}
            hasClickedNotifications={this.state.hasClickedNotifications} userPantry={this.state.userPantry} onRemoveFromPantry={this.onRemoveFromPantry}/>
        );
      }
    }
  }
