import {useState} from 'react';

const Story = (props) => {

    // const post = props.post;

    const {name, status, time, likes} = props.post;

    const [hearts, setHearts] = useState(likes + 3);

  return(
    <div className="story">
        <p className="name">{name}</p>
        <p className="time">{time}</p>
        <p className="status">{status}</p>
        <button className="likes">💙 {hearts}</button>
        <hr/>
    </div>
  )
}

export default Story;