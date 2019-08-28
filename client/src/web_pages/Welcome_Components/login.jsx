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
            <input placeholder="Username" name='userName' value={this.props.userName} type='text' onChange={this.props.onChangeLogin} /><br></br>
            <input placeholder="Passwords" name='password' value={this.props.password} type='password' onChange={this.props.onChangeLogin} />
          </form>
          <div className="LoginButtonSubmit">
          <button onClick={()=>{this.props.onLoginSubmitClick();}} > Login</button>
          </div>
          <div className="LoginButtonCancel">
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
