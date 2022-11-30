import React from 'react';
import { format } from 'date-fns'

class Form extends React.Component {
    state = {
        name: 'Kai',
        status: '🐕',
        time: '',
        likes: 0
    }

    render() {
        return (
            <>
                <h3 className="name">{this.state.name}</h3>
                <p className="time">{this.state.time}</p>
                <p>{this.state.status}</p>
                <input type="text" onChange={
                    e => this.setState({
                        status: e.target.value,
                        time: format(Date.now(), 'PPPPpppp')
                    })} 
                />
            </>
        )
    }
}

export default Form;