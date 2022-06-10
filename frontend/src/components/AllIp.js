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
      this.loadIp()
      }

    loadIp = () => {
            const token_passed = this.props.token
            console.log('token load IP', token_passed)
            fetch('http://127.0.0.1:8000/location-api/', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
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
            <div className='container'>
                <h1 className='h2'> all Ips:  </h1>
                {this.state.ip.map(ip => {
                    return <div className='container border-bottom border-2 m-2' key={ip.id}>
                    <p>Location_name: {ip.name} user: {ip.userLocations}</p>
                    <p>location:<strong>{ip.ipLocation}</strong></p>
                    <DeleteIp geo_id={ip.id}/>
                    </div>
                })}
            </div>
      );
    }
}
    export default AllIp;