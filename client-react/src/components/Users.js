import React from 'react';
import axios from 'axios';

class Users extends React.Component{
constructor(props){
super (props);
this.state={users:[]};
}
componentDidMount(){
    this.getData();
}

getData=() =>{
let url ='http://localhost:8080/users';
axios.get(url).then((res) =>
 this.setState({
 users: res.data})
)
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
<li key={user.id}>{user.username}</li>
       ))}
   </ul>
   <h3>Add new user</h3>
    </div>
);
}
}

export default Users;