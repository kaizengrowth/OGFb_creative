const MenuItem = (props) => {
  const numbers = props.numbers;  
  return (
    <>
        {/* <h5>Item 1</h5> */}
        <h5>Item {numbers[0]}</h5>
    </>
  )
}

export default MenuItem;