import {useState} from 'react';

const Story = (props) => {

    const {name, status, time, likes} = props.post;

    const [hearts, setHearts] = useState(likes + 3);

    const handleClick = () => {
      setHearts(hearts+1);
    }

  return(
    <div className="story">
        <p className="name">{name}</p>
        <p className="time">{time}</p>
        <p className="status">{status}</p>
        <button onClick={handleClick} className="likes">💙 {hearts}</button>
        <hr/>
    </div>
  )
}

export default Story;