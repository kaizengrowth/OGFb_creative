import './App.css';
import SideNav from './SideNav';
import Feed from './Feed';
import './Main.css';

export default function Main() {
    return( 
        <div className='mainContainer'>  
            <SideNav />
            <Feed />
        </div>
    )
  }