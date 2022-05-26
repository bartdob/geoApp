import React, {useState} from 'react'
import './App.css';
import Ip from './components/ip';
import Login from './components/Login';
import AddIp from './components/AddIp';

function App() {
    const [username, setUsername] = useState('')
    const [token, setToken] = useState('')
    var logginButton, ipButton, logoutButton, newIP

    const userLogin = (tok) => {
      setToken(tok);
    }

    const userPassName = (user) => {
      setUsername(user);
    }

    const logout = () => {
      localStorage.clear();
      window.location.href = '/';
    }

    if (token === '') {
      logginButton = <Login userLogin={userLogin} userPassName={userPassName}/>;
    } else {
      logginButton = <div>You are logged <strong>{username}</strong></div>;
      ipButton = <Ip token={token}/>;
      logoutButton = <a href="/" onClick={logout}>logout</a>
      newIP = <AddIp token={token}/>
    }

    return (
      <div className="App">
          <h1>Main Page</h1>
          {logoutButton}
          {logginButton}
          {ipButton}
          {newIP}

      </div>
    );
  }

export default App;

