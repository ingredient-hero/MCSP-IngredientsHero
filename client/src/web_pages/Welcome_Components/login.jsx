import React from 'react';
import Modal from './modal.jsx';

export default class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        isOpen: false, 
        userName: props.userName,
        password: props.password
    };
    // this.componentDidMount = this.componentDidMount.bind(this)
    this.toggleModal=this.toggleModal.bind(this)
  }

//   componentDidMount(){

//   }
          
  

//   onClick() {
    
//    console.log('saved')
//     axios
//   } 
  
  toggleModal () {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="Login">
        <button onClick={this.toggleModal} style={{marginLeft: "1300px"}}>
          Login
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          Login Page
          <form> 
             Username <input name='userName' type='text'  onChange={this.props.onChangeLogin}/><br></br>
             Password <input name='password' type='text'  onChange={this.props.onChangeLogin}/>
             <button onClick={this.onClick}> Login</button>
          </form>
        </Modal>
      </div>
    );
  }
}