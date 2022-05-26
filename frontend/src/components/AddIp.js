import React, { Component } from 'react'

class AddIp extends Component {

    // state = {
    //     ip: ([]),
    //     token: '',
    // };

    // loadIp = () => {
    //         const token_passed = this.props.token
    //         fetch('http://127.0.0.1:8000/new/ip/', {
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'application/json',
    //             'X-CSRFToken': `${token_passed}`
    //         },
    //           body: JSON.stringify(this.state.cridentials)
    //         })
    //         .then(data => data.json())
    //         .then(
    //           data => {
    //             this.setState({ip: data})
    //           }
    //         ).catch( error => console.log(error))
    //       }

    render() {
        return (
            <div>
                <h1> add New IP: </h1>
                <form>
                    <label>
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Wyślij" />
                </form>
            </div>
      );
    }
}
export default AddIp;