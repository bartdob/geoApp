import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Prev } from 'react-bootstrap/esm/PageItem';

class AddIp extends Component {
    state = {
        new_ip: {userLocations: '1', ipLocation: '', name: ''},
        token: this.props.token,
        users: [],
        isLoaded: false,
        cridentials: {username: '', password: '',}
    };
    componentDidMount(){
      this.updateUser()
    }

    updateUser = (props) => {
      console.warn("user updated")
      const url = process.env.REACT_APP_BASE_URL
      const token_passed = this.props.token
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token_passed);
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Content-Type', 'application/json');
      fetch(url+'/users/', {
        method: 'GET',
        headers: myHeaders,
      })
      .then(data => data.json())
      .then(
        data => {
          console.log(data)
          this.setState({users: data})
        }
      ).catch( error => console.log(error))
    }

    inputChanged = event =>{
      const cred = this.state.new_ip;
      cred[event.target.name] = event.target.value;
      this.setState({new_ip: cred})
      }

    prevSubmit = e => {
      e.preventDefault();
    }

    addIp = (props, e) => {
      const token_passed = this.props.token;
      const url = process.env.REACT_APP_BASE_URL
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token_passed);
      var formdata = new FormData();
        formdata.append("userLocations", this.state.new_ip.userLocations);
        formdata.append("ipLocation", this.state.new_ip.ipLocation);
        formdata.append("name", this.state.new_ip.name);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };

    fetch(url+"/location-api/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    }

    inputChanged = event =>{
    const cred = this.state.new_ip;
    cred[event.target.name] = event.target.value;
    }

    render() {
        return (
            <div className="container border border-2">
                <h1> add New IP: </h1>
                    <Form onSubmit={this.prevSubmit}>
                            {/* <div className="form-group">
                              <input type="hidden" name="csrfmiddlewaretoken" value= {this.state.csrfmiddlewaretoken}/>
                            </div> */}
                            <select className='form-select w-50 form-control' name="userLocations" onChange={this.inputChanged}>
                            {this.state.users.map(u => {
                            return <option className='container border border-info'  key={u.id}> {u.id}</option>
                            })}
                            </select>
                            <div class="form-group">
                                <input type="text" className="w-50 form-control" placeholder="add ipLocation" name="ipLocation" onChange={this.inputChanged}/>
                            </div>
                            <div class="form-group">
                                <input type="text" className="w-50 form-control" placeholder="add name" name="name" onChange={this.inputChanged}/>
                            </div>
                            {/* <div class="form-group">
                                <input type="text" className="w-50 form-control" placeholder={this.props.username}  readOnly value={this.props.username}/>
                            </div> */}

                            <Button type="submit" className="btn btn-success" onClick={this.addIp}>
                            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-plus-square-fill" fill="currentColor">
                                <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                              </svg>
                            </Button>
                    </Form>
            </div>
      );
    }
}
export default AddIp;