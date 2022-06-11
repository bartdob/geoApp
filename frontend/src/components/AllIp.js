import React, { Component } from 'react'
import DeleteIp from './DeleteIp';

class AllIp extends Component {

    state = {
        ip: ([]),
        token: '',
    };

    componentDidMount(){
      this.loadIp()
    }

    componentDidUpdate(){
      // this.loadIp()
      }

    loadIp = () => {
            const token_passed = this.props.token
            this.setState({token: this.props.token})
            console.log('token load IP1', this.state.token)
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + token_passed);
            myHeaders.append('Accept', 'application/json');
            myHeaders.append('Content-Type', 'application/json');
            fetch('http://127.0.0.1:8000/location-api/', {
              method: 'GET',
              headers: myHeaders,
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
            <div className='container'>
                <h1 className='h2'> all Ips:  </h1>
                <button onClick={this.loadIp}>reload</button>
                {this.state.ip.map(ip => {
                    return <div className='container border-bottom border-2 m-2' key={ip.id}>
                    <p>Location_name: {ip.name} user: {ip.userLocations}</p>
                    <p>location:<strong>{ip.ipLocation}</strong></p>
                    <DeleteIp geo_id={ip.id} token={this.state.token}/>
                    </div>
                })}
            </div>
      );
    }
}
    export default AllIp;