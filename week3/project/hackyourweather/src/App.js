import './styles/App.css';
// import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="app">
      <h1 className="main-header">Weather</h1>
      <SearchBar />
    </div>
  );
};

export default App;
