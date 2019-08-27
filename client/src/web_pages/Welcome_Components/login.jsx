import React from 'react';

export default class LoginModal extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    if (this.props.isOpen === true) {
      return (
        <div className="Login">
          <form className="LoginContent"> 
            Login <br/>
            Username <input name='userName' value={this.props.userName} type='text' onChange={this.props.onChangeLogin} /><br></br>
            Password <input name='password' value={this.props.password} type='password' onChange={this.props.onChangeLogin} />
          </form>
          <div className="LoginButtons">
          <button onClick={()=>{this.props.onLoginSubmitClick();}} > Login</button>
          <button onClick={this.props.toggleModal}>Cancel</button>
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
}
        // <Modal show={this.props.isOpen}
        //   onClose={this.props.toggleModal}>
        //   Login Page
        //   <form className='SignUp'> 
        //      Username <input name='userName' value={this.props.userName} type='text'  onChange={this.props.onChangeLogin}/><br></br>
        //      Password <input name='password' value={this.props.password} type='text'  onChange={this.props.onChangeLogin}/>
        //   </form>
        //      <button onClick={this.props.grantUserAccess} > Login</button>
        // </Modal>