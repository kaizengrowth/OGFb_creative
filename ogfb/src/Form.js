import React from 'react';
import { format } from 'date-fns'

class Form extends React.Component {
    state = {
        name: 'Kai',
        status: '🐕',
        time: ''
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
                {/* <p>Guessed Age: </p> */}
                <p><b>Suggested Activity:</b> {this.state.status}</p>

                <form>
                    <input  type='text' placeholder='Name' name="name" />

                    <input type='text' placeholder='Status' name="status" />

                    <input type='submit' value='Submit' />

                </form>
            </div>
        )
    }
}

export default Form;