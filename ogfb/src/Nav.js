import logo from './old_fb_banner.png';
import './App.css';
import MenuItem from './MenuItem'

export default function Nav () {
  return( 
    <>
        <img src={logo} className="App-logo" alt="logo" />
        <MenuItem />
    </>
  )
}