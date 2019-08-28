import React from 'react';
import Welcome from './web_pages/welcome.jsx';
import Pantry from './web_pages/pantry.jsx';
import axios from 'axios';
// import './App.css';
import REACT_APP_API_KEY from '../../api.js';


// This is an example that will need to be rebuilt and/or refactored.
// This page is pulling in both the pantry and the welcome class components to conditionally render on the page.
// You may need to import more libraries or files, depending on what's required.

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
      // event.preventDefault()
      // console.log(event.target.name)
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
      // e.preventDefault();
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
  
  //ideal to rewrite this entire function to be able to access a specific user vs access all users in an array but fixed to the first index
  onLoginSubmitClick(e){
      // e.preventDefault();
      let user = [];
     axios.get('/mylogin', {params:{userName:this.state.userName, password:this.state.password}})
     .then(res => {
        console.log('res.data now contains the users items that can be passed to pantry', res.data);
        // res.data[0].map(function(info,i) {
        //   let tuple = [];
        //   tuple.push(info.userName, info.password, info.UserID)
        //   user.push(tuple);
        //   console.log(user)
        // })
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
      // .then(() => {
      
      //   this.setState({
          
      //   })
      // })
    .catch((err) => { console.log(err); });
}



onAddToPantry () {
  // const addItem = {
  //   item_name: this.state.item_name,
  //   expiration: this.state.expiration
  // };
  axios.post('/addingtopantry', {
    item_name: this.state.item_name,
    expiration: this.state.expiration,
    UserID:this.state.UserID
    })
  // console.log(params)
  // .then( response => {
  //   response.data.map(function(foods) {
  //     console.log(foods);
  //   })
  //   //  console.log(response.data);
  //   })  
  //   .catch(error => console.log(error))
}


onChangeRecipes (e) {
    this.setState({changeRecipes: !this.state.changeRecipes});
}

clickSort (e) {
  document.getElementById("myDropdown").classList.toggle("show");
}

// componentDidMount () {
//   axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${REACT_APP_API_KEY}&number=1`)
//   .then( res => {
//       this.setState({recipes: res.data});
//   })
//   .catch( err => {
//       if (err) {
//           console.error(err);
//       }
//   })
// }


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
            hasClickedNotifications={this.state.hasClickedNotifications} />
        );
      }
    }
  }

  //added set state to axios request to stop login before acceptance
  //grantUserAccess={this.grantUserAccess}