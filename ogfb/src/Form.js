import React from 'react';
import { format } from 'date-fns'
import './Main.css';

class Form extends React.Component {
    state = {
        name: 'Kai',
        status: '🐕',
        time: '',
        logged: false
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name] : value}
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.name + ' will ' + (this.state.status).toLowerCase());
    }

    componentDidMount() {
        fetch('https://www.boredapi.com/api/activity')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    'status' : data['activity']
                });
            }, (error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className='form'>
                <h3>{this.state.name}</h3>
                <p><b>Suggested Activity:</b> {this.state.status}</p>

                <form onSubmit={this.handleSubmit} >
                    <input onChange={this.handleInputChange} type='text' placeholder='Name' name="name" />

                    <br/>
                    <br/>

                    <input onChange={this.handleInputChange} placeholder={this.state.status} name='status' />

                    <br/>
                    <br/>

                    <input type='submit' value='Submit' />

                </form>
            </div>
        )
    }
}

export default Form;