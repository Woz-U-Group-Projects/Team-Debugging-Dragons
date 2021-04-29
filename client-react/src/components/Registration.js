import React from 'react';
import axios from 'axios';
import './registration.css';

class Registration extends React.Component{
constructor(props){
super (props);
this.state={};
}

componentDidMount(){
}


handleChange = (e) => {
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    })
}

addUser = () => {
    let url ="http://localhost:8080/users";
    axios.post(url, {
        username: this.state.username,
        password: this.state.password
    }).then( window.location.reload() )
}

render(){
    return (
        <div>
            <h2>Register</h2>
            <input
            name="username"
            onChange={this.handleChange}
            placeholder="username"
            />
            <input
            name="password"
            onChange={this.handleChange}
            placeholder="password"
            />
            <button type="button" onClick={this.addUser}>Add User</button>
        </div>
    );
}
}

export default Registration;