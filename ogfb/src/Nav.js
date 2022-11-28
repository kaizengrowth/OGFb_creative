import logo from './old_fb_banner.png';
import './App.css';
import MenuItem from './MenuItem'

export default function Nav () {

  const links = ["home", "search", "global", "invite", "faq", "logout"]

  return( 
    <>
        <img src={logo} className="App-logo" alt="logo" />

        {
            links.map( (link, key ) => 
                <MenuItem link={link} key={key} />)
        }

    </>
  )
}