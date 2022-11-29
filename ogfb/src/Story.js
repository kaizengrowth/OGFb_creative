import {useState} from 'react';

const Story = (props) => {

    const {name, status, time, likes} = props.post;

    const [hearts, setHearts] = useState(likes);
    const [liked, setLiked] = useState(false);

    const handleClick = () => {
      if (liked === false) {
        setHearts(hearts+1);
        setLiked(true);
      } else {
        setHearts(hearts-1);
        setLiked(false);
      }
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