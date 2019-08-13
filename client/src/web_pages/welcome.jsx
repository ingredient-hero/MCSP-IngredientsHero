import React from 'react';


export default class Welcome extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            SignUp: '',
            Login: '',

        }
        this.handleChange = this.handleChange.bind(this);
       
        
    }

    handleChange(event) {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value
        });
    }



    render() {
        return ( 
            <form onSubmit={this.handleSubmit}>
  
            <button type="submit">Sign-Up</button>
            
            <button type="submit">Login</button>
            </form>
             )}
}