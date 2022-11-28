import {useState} from 'react';
import Button from 'react-bootstrap/Button';

const Story = (props) => {

    const {name, status, time, likes} = props.post;

    const [hearts, setHearts] = useState(likes + 3);
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
        <Button onClick={handleClick} className="likes">💙 {hearts}</Button>
        <hr/>
    </div>
  )
}

export default Story;