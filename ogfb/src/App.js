// import logo from './logo.svg';
import logo from './old_fb_banner.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">  
        <p>
          Hello, the Book of Face: 🎉!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I'm learning React.
        </a>
      </header>
    </div>
  );
}

export default App;
