import './Nav.css'

const MenuItem = (props) => {
  const link = props.link;  
  return (
    <div className='menuItem'>
        {/* <h5>Item 1</h5> */}
        <h5>{link}</h5>
    </div>
  )
}

export default MenuItem;