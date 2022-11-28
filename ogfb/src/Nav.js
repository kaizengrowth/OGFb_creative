import logo from './old_fb_banner.png';
import './App.css';
import MenuItem from './MenuItem'

export default function Nav () {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

  return( 
    <>
        <img src={logo} className="App-logo" alt="logo" />
        <MenuItem numbers={numbers[0]} />
        <MenuItem numbers={numbers[1]} />
        <MenuItem numbers={numbers[2]} />
    </>
  )
}