import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';

class AddIp extends Component {

    state = {
        new_ip: '',
        token: '',
        cridentials: {username: '', password: '',}
    };

    loadIp = () => {
            const token_passed = this.props.token
            fetch('http://127.0.0.1:8000/ip/new/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': `${token_passed}`
            },
              body: JSON.stringify(this.state.cridentials)
            })
            .then(data => data.json())
            .then(
              data => {
                this.setState({ip: data});
                this.props.userLogin(data.token);
                this.props.userPassName(this.state.cridentials.username)
              }
            ).catch( error => console.log(error))
          }

    render() {
        return (
            <div className="container border border-info">
                <h1> add New IP: </h1>
                    <Form>
                            <div class="form-group">
                                <input type="text" class="w-50 form-control" placeholder="add ipLocation" name="ipLocation"/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="w-50 form-control" placeholder="add name" name="name"/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="w-50 form-control" placeholder={this.state.cridentials.username} name="userLocations_id" readonly value={this.state.cridentials.username}/>
                            </div>
                            <Button type="submit" class="btn btn-success">
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