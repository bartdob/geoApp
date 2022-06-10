import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class DeleteIp extends Component {

    state = {
        ip: ([]),
        token: '',
    };

    delIp = (props) => {
        const token_passed = this.props.token
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token_passed);

        var requestOptions = {
          method: 'DELETE',
          headers: myHeaders,
          redirect: 'follow'
          };

      fetch("http://127.0.0.1:8000/location-api/"+this.props.geo_id, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
          }

    render() {
        return (
            <div className='container'>
                <Button onClick={this.delIp}> del  </Button>
            </div>
      );
    }
}
    export default DeleteIp;