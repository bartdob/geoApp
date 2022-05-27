import React, {useState} from 'react'
import './App.css';
import Ip from './components/ip';
import Login from './components/Login';
import AddIp from './components/AddIp';
import AIP from './components/AIP';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [username, setUsername] = useState('')
    const [token, setToken] = useState('')
    var logginButton, ipButton, logoutButton, newIP, newIP2

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
      newIP = <AddIp token={token} username={username}/>
      newIP2 = <AIP></AIP>
    }

    return (
      <div className="App">
          <h1>Main Page</h1>
          {logoutButton}
          {logginButton}
          {ipButton}
          {newIP}
          {newIP2}

      </div>
    );
  }

export default App;

