import './App.css';
import cityWeather from './city-weather.json';
import ListOfCities from './components/ListOfCities';
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
