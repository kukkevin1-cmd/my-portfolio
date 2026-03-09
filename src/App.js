import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi, I'm Kevin Kuk 👋</h1>
        <p style={{ fontSize: '1.2rem', color: '#61dafb' }}>
          CS Student @ <b>University of Washington, Seattle</b>
        </p>

        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.1)', 
          padding: '20px', 
          borderRadius: '15px',
          margin: '20px 0'
        }}>
          <p>
            🚀 <b>Status:</b> Successfully deployed on <b>AWS Amplify</b>!
            <br />
            Building scalable solutions and learning cloud infrastructure.
          </p>
        </div>
        <div className="button-container">
          <a
            className="App-link"
            href="https://github.com/kukkevin1-cmd" // 본인 깃허브 주소로 확인해 보세요!
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: '0 10px', padding: '10px 20px', border: '1px solid #61dafb', borderRadius: '5px', textDecoration: 'none' }}
          >
            GitHub
          </a>
          <a
            className="App-link"
            href="https://www.linkedin.com" // 나중에 링크드인 주소 넣으세요!
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: '0 10px', padding: '10px 20px', border: '1px solid #61dafb', borderRadius: '5px', textDecoration: 'none' }}
          >
            LinkedIn
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
