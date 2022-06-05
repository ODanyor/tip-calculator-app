import Display from '../Display/Display';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h2>
          <span>spli</span>
          <span>tter</span>
        </h2>
      </header>
      <div className="app-container">
        <Display />
      </div>
    </div>
  );
}

export default App;
