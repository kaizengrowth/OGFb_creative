const Story = (props) => {

    // const post = props.post;

    const {name, status, time, likes} = props.post;

  return(
    <>
        <p>{name}</p>
        <p>{time}</p>
        <p>{status}</p>
        <p>{likes}</p>
    </>
  )
}

export default Story;