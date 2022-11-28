import MenuItem from './MenuItem'
import './Nav.css'

export default function Nav () {

  const links = ["home", "search", "global", "invite", "faq", "logout"]

  return( 
    <div className='navbar'>
        

        {
            links.map( (link, key ) => 
                <MenuItem link={link} key={key} />)
        }

    </ div>
  )
}