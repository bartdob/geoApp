import React, { Component } from 'react';

class Login extends Component {


  state = {
    cridentials: {username: '', password: '',},
    token: "",
  }

  login = event =>{
    const url = process.env.REACT_APP_BASE_URL
    fetch(url+'/api/token/', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      body: JSON.stringify(this.state.cridentials),
    })
    .then(data => data.json())
    .then(
      data => {
        const read_token = data.access
        this.setState({token: read_token})
        this.props.userLogin(read_token);
        console.warn(this.props.userLogin)
        this.props.userPassName(this.state.cridentials.username)
      }
    ).catch( error => console.log(error))
  }

  inputChanged = event =>{
    const cred = this.state.cridentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred})
  }

  signUp = event =>{
    const url = process.env.REACT_APP_BASE_URL;
    fetch(url+'/api/users/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.cridentials)
    })
    .then(data => data.json())
    .then(
      data => {
        this.props.userLogin(data.token);
      }
    ).catch( error => console.log(error))
  }

  render(){
    return (
        <div>
            <h1> Login User </h1>
            <label>
              <input type="text" name="username" value={this.state.cridentials.username}
              onChange={this.inputChanged} placeholder="username"/>
              <br/>
              <input type="password" name="password" value={this.state.cridentials.password}
              onChange={this.inputChanged} placeholder="password"/>
              <br/>
            </label>
            <button onClick={this.login} >Login</button>
            <button onClick={this.signUp}>SignUp</button>
        </div>
  );
}
}
export default Login;