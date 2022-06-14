import React, {useState} from 'react'
import './App.css';
import Ip from './components/AllIp';
import Login from './components/Login';
import AddIp from './components/AddIp';
import 'bootstrap/dist/css/bootstrap.min.css';
const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
    const [username, setUsername] = useState('')
    const [token, setToken] = useState('')
    var logginButton, ipButton, logoutButton, newIP

    const userLogin = (tok) => {
      setToken(tok);
      console.warn(tok)
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
        logginButton = <div className='container mt-5'>You are logged as User: <strong>{username}</strong></div>;
        ipButton = <Ip token={token}/>;
        logoutButton = <div className='container position-absolute top-30 start-10 translate-middle'><a href="/" onClick={logout}>logout</a></div>
        newIP = <AddIp token={token} username={username} userLogin={userLogin} userPassName={userPassName}/>
    }

    return (
      <div className="App container">
          <h1 className='h1'>Main Page</h1>
          {logoutButton}
          {logginButton}
          {ipButton}
          {newIP}

      </div>
    );
  }

export default App;

