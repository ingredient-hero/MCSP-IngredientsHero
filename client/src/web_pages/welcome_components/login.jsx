 import React from 'react';
 import ReactDom from 'react-dom';
// import Form from 'bootstrap/Form';
// import bootbox from 'bootbox';
// import bootstrap from 'bootstrap'

// import React, { Component } from 'react';
import Modal from './modal.jsx';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggleModal=this.toggleModal.bind(this)
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
             Username <input/><br></br>
             Password <input/>
             <button> Submit</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;

