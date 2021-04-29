import React from 'react';
import axios from 'axios';

class Users extends React.Component{
constructor(props){
super (props);
this.state={
users:[],
};
}
componentDidMount(){
    this.getData();
    
}
GetData=() =>{
let url ='http//:localhost8080/users';
axios.get(url).then((res)=>{
    this.setState({
users: res.data.users,
    });
 })

};
handleChange=(e)=>{
console.log(e.target.value)
   
};
 render(){
return (
    <div id="App">
        <h3>List of Users:</h3>
        <ul>
{this.state.users.map((user)=>(
<li key={user.id}>{user.Username}</li>
       ))}
   </ul>
   <h3>Add new user</h3>
       <input
       name='username'
       onChange={this.handleChange}
       placeholder='username'>
        </input>
        <input
       name='password'
       onChange={this.handleChange}
       placeholder='password'>
        </input>
    </div>
);
}
}

export default Users;