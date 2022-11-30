import React from 'react';

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
                <p>{this.state.status}</p>
            </>
        )
    }
}

export default Form;