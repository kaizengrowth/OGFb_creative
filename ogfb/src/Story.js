const Story = (props) => {

    const post = props.post;

  return(
    <>
        <p>{post["name"]}</p>
        <p>{post["status"]}</p>
        <p>{post["time"]}</p>
        <p>{post["likes"]}</p>
    </>
  )
}

export default Story;