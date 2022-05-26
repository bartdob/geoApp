import React, { Component } from 'react'

class Ip extends Component {

    state = {
        ip: ([]),
        token: '',
    };

    loadIp = () => {
            const token_passed = this.props.token
            fetch('http://127.0.0.1:8000/location-api/', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': `${token_passed}`
            },
              body: JSON.stringify(this.state.cridentials)
            })
            .then(data => data.json())
            .then(
              data => {
                this.setState({ip: data})
              }
            ).catch( error => console.log(error))
          }

    render() {
        return (
            <div>
                <h1> all IP </h1>
                {this.state.ip.map(ip => {
                    return <h3 key={ip.id}> {ip.name} </h3>
                })}
                <button onClick={this.loadIp}> Get Ip
                </button>
            </div>
      );
    }
}
    export default Ip;