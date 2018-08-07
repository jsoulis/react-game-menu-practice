import React, { Component } from 'react';
import UserList from './UserList'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    users: []
  };

  doesUserIdExist = (userid) => {
    if(this.state.users) {

      //this is where the problem is
      // this.state.users.forEach((el) => {
      //   if(el.userId === userid) return true;
      // })

      //이것도 안 된당! 
      for (let user in this.state.users) {
        if(user.userid === userid) return true;
      }
    }
    return false;
  }

  updateUsers = (newUser) => {
    this.setState((currentState)=>({
      //push didnt work because it returns new length of array
      //users: currentState.users.push(newUser)

      //concat returns new big array so it works!
      users: currentState.users.concat([newUser])
  }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <UserList checkUser={this.doesUserIdExist} addUser={this.updateUsers}/>
      </div>
    );
  }
}

export default App;
