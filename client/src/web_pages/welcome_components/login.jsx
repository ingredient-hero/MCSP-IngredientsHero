import React from 'react';
import ReactDom from 'react-dom';
//import Form from 'bootstrap/Form'



const Login = (props) => {
return(
    <Form>
        <Form.Group controlId="formBasicUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter Username"/>
        </Form.Group>
        
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password"/>
        </Form.Group>
        <Button variant="primary" type="Login">
        Login
        </Button>
    </Form>
)
}

export default Login