import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { format } from 'date-fns'

const Story = (props) => {

    const {name, status, time, likes} = props.post;

    const [hearts, setHearts] = useState(likes + 3);
    const [liked, setLiked] = useState(false);
    const [datetime, setDatetime] = useState(time)

    const handleClick = () => {
      if (liked === false) {
        setHearts(hearts+1);
        setLiked(true);
        const date = Date.now();
        setDatetime(format(date, 'PPPPpppp'));
      } else {
        setHearts(hearts-1);
        setLiked(false);
      }
    }

  return(
    <div className="story">
        <p className="name">{name}</p>
        <p className="time">{datetime}</p>
        <p className="status">{status}</p>
        <Button onClick={handleClick} className="likes">💙 {hearts}</Button>
        <hr/>
    </div>
  )
}

export default Story;