// import logo from './logo.svg';
import logo from './old_fb_banner.png';
import './App.css';
import Nav from './Nav';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Main />
    </div>
  );
}

export default App;
