 import React from 'react';
 import ReactDom from 'react-dom';
//import Form from 'bootstrap/Form';
import bootbox from 'bootbox';
import bootstrap from 'bootstrap'


import Modal from './modal.jsx';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        isOpen: false, 
        users: [],
        user: '',
        password: ''
    };
    this.componentDidMount = this.componentDidMount.bind(this)
    this.onChange = this.onChange.bind(this)
    this.toggleModal=this.toggleModal.bind(this)
  }

  componentDidMount(){

  }

  onChange(event){
    event.preventDefault()
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onClick() {
    // bootbox.confirm("<form id='infos' action=''>\
    // Name:<input type='text' name='user_name' /><br/>\
    // Username:<input type='text' name='user_name' /><br/>\
    // Password:<input type='text' name='user_name' /><br/>\
    // Email:<input type='text' name='user_name' />\
    // </form>", function(result) {if(result)$('#infos').submit();
   console.log('saved')
    //   })
  } 
  
  toggleModal () {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="Welcome">
        <button onClick={this.toggleModal} style={{marginLeft: "1300px"}}>
          Login
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          Login Page
          <form> 
             Username <input name='user' type='text' value={this.state.user} onChange={this.onChange}/><br></br>
             Password <input name='password' type='text' value={this.state.password} onChange={this.onChange}/>
             <button onClick={this.onClick}> Login</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;

