import React from 'react';
import Modal from './modal.jsx';

export default class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        // isOpen: false, 
        userName: props.userName,
        password: props.password
    };
    // this.componentDidMount = this.componentDidMount.bind(this)
    // this.toggleModal=this.toggleModal.bind(this)
  }

//   componentDidMount(){

//   }
          
  

//   onClick() {
    
//    console.log('saved')
//     axios
//   } 
  
  // toggleModal () {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }

  render() {
    return (
      <div className="Login">
        <button onClick={this.props.toggleModal} style={{marginLeft: "1300px"}}>
          Login
        </button>

        <Modal show={this.props.isOpen}
          onClose={this.props.toggleModal}>
          Login Page
          <form> 
             Username <input name='userName' value={this.props.userName} type='text'  onChange={this.props.onChangeLogin}/><br></br>
             Password <input name='password' value={this.props.password} type='text'  onChange={this.props.onChangeLogin}/>
          </form>
             <button onClick={this.props.grantUserAccess} > Login</button>
        </Modal>
      </div>
    );
  }
}