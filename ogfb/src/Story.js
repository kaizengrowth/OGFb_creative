const Story = (props) => {

    // const post = props.post;

    const {name, status, time, likes} = props.post;

  return(
    <div className="story">
        <p className="name">{name}</p>
        <p className="time">{time}</p>
        <p className="status">{status}</p>
        <button className="likes">💙 {likes}</button>
        <hr/>
    </div>
  )
}

export default Story;